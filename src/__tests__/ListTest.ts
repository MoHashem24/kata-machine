export function test_list(list: List<number>): void {
 // Empty list
    expect(list.length).toEqual(0);
    expect(list.get(0)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(undefined);
    expect(list.remove(100)).toEqual(undefined);

    // Append
    list.append(5);
    list.append(7);
    list.append(9);
debugger;
    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(7);
    expect(list.get(2)).toEqual(9);

    // Insert in the middle
    list.insertAt(6, 1);

    expect(list.length).toEqual(4);
    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(6);
    expect(list.get(2)).toEqual(7);
    expect(list.get(3)).toEqual(9);

    // Insert at beginning
    list.insertAt(3, 0);

    expect(list.length).toEqual(5);
    expect(list.get(0)).toEqual(3);
    expect(list.get(1)).toEqual(5);
    expect(list.get(2)).toEqual(6);
    expect(list.get(3)).toEqual(7);
    expect(list.get(4)).toEqual(9);

    // Insert at end
    list.insertAt(11, list.length);

    expect(list.length).toEqual(6);
    expect(list.get(5)).toEqual(11);

    // Find
    expect(list.find(3)).toEqual(0);
    expect(list.find(7)).toEqual(3);
    expect(list.find(11)).toEqual(5);
    expect(list.find(100)).toEqual(-1);

    // Remove from middle
    expect(list.removeAt(2)).toEqual(6);

    expect(list.length).toEqual(5);
    expect(list.get(0)).toEqual(3);
    expect(list.get(1)).toEqual(5);
    expect(list.get(2)).toEqual(7);
    expect(list.get(3)).toEqual(9);
    expect(list.get(4)).toEqual(11);

    // Remove by value
    expect(list.remove(7)).toEqual(7);

    expect(list.length).toEqual(4);
    expect(list.get(0)).toEqual(3);
    expect(list.get(1)).toEqual(5);
    expect(list.get(2)).toEqual(9);
    expect(list.get(3)).toEqual(11);

    // Remove first
    expect(list.removeAt(0)).toEqual(3);

    expect(list.length).toEqual(3);
    expect(list.get(0)).toEqual(5);

    // Remove last
    expect(list.removeAt(list.length - 1)).toEqual(11);

    expect(list.length).toEqual(2);
    expect(list.get(0)).toEqual(5);
    expect(list.get(1)).toEqual(9);

    // Prepend
    list.prepend(3);
    list.prepend(1);

    expect(list.length).toEqual(4);
    expect(list.get(0)).toEqual(1);
    expect(list.get(1)).toEqual(3);
    expect(list.get(2)).toEqual(5);
    expect(list.get(3)).toEqual(9);

    // Remove remaining values
    expect(list.remove(1)).toEqual(1);
    expect(list.remove(3)).toEqual(3);
    expect(list.remove(5)).toEqual(5);
    expect(list.remove(9)).toEqual(9);

    expect(list.length).toEqual(0);

    // Empty again
    expect(list.get(0)).toEqual(undefined);
    expect(list.removeAt(0)).toEqual(undefined);
    expect(list.remove(999)).toEqual(undefined);
}
