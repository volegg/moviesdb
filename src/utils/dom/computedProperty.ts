export function getComputedStyle<TElement extends Element>(element: TElement | null) {
    if (element !== null) {
        return window.getComputedStyle(element);
    }

    return null;
}
