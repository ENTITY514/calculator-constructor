import React from "react"

type DragFunction = (e: DragEvent, element: HTMLElement) => void
interface args {
    onDragStart: DragFunction | null,
    onDragLeave: DragFunction | null,
    onDragEnd: DragFunction | null,
    onDragOver: DragFunction | null,
    onDrop: DragFunction | null,
    onDragEnter: DragFunction | null,
}

export function useDnD(
    element: React.RefObject<HTMLElement>,
    args: args,
    data?: any,
) {
    const [isDragging, setIsDragging] = React.useState<boolean>(false)

    const onDragStart = React.useRef<DragFunction>(args.onDragStart !== null ? args.onDragStart : () => { })
    const onDragLeave = React.useRef<DragFunction>(args.onDragLeave !== null ? args.onDragLeave : () => { })
    const onDragEnd = React.useRef<DragFunction>(args.onDragEnd !== null ? args.onDragEnd : () => { })
    const onDragOver = React.useRef<DragFunction>(args.onDragOver !== null ? args.onDragOver : () => { })
    const onDrop = React.useRef<DragFunction>(args.onDrop !== null ? args.onDrop : () => { })
    const onDragEnter = React.useRef<DragFunction>(args.onDragEnter !== null ? args.onDragEnter : () => { })

    const DragStart = (e: DragEvent) => {
        console.log("start");
        if (element.current !== null) {
            onDragStart.current(e, element.current)
        }

    }

    const DragEnd = (e: DragEvent) => {
        console.log("end");
        if (element.current !== null) {
            onDragEnd.current(e, element.current)
        }

    }

    const DragLeave = (e: DragEvent) => {
        if (element.current !== null) {
            onDragLeave.current(e, element.current)
        }

    }

    const DragOver = (e: DragEvent) => {
        console.log("over");
        if (element.current !== null) {
            onDragOver.current(e, element.current)
        }

    }

    const DragEnter = (e: DragEvent) => {
        console.log("enter");
        if (element.current !== null) {
            onDragEnter.current(e, element.current)
        }

    }

    const Drop = (e: DragEvent) => {
        console.log("drop");
        if (element.current !== null) {
            onDrop.current(e, element.current)
        }

    }


    React.useEffect(() => {
        element.current?.addEventListener("dragstart", DragStart)
        element.current?.addEventListener("dragend", DragEnd)
        element.current?.addEventListener("dragleave", DragLeave)
        element.current?.addEventListener("dragover", DragOver)
        element.current?.addEventListener("dragenter", DragEnter)
        element.current?.addEventListener("drop", Drop)
    }, [])

    return { isDragging }
}