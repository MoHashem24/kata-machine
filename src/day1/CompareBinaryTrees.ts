//need DFs traversal to compare as DFs keep same shape
export default function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null): boolean {
    if (a === null && b === null) return true;
    if (a === null && b !== null) return false;
    if (a !== null && b === null) return false;

    if (a?.value !== b?.value) return false;
    if (!compare(a?.left || null, b?.left || null)) return false;
    if (!compare(a?.right || null, b?.right || null)) return false;

    return true;
}