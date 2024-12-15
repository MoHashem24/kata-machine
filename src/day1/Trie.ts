class TrieNode {
    isWord = false;
    children: Map<string, TrieNode> = new Map<string, TrieNode>();
}
export default class Trie {
    //auto complete
    //caching system
    //search engine
    //spell checker
    root: TrieNode;
    children: Map<string, TrieNode>;
    constructor() {
        this.root = { isWord: false, children: new Map() };
    }

    insert(item: string): void {
        //get node root
        let node = this.root;
        //loop through item if any char is inside key of children map
        for (let charIndex = 0; charIndex < item.length; charIndex++) {
            const char = item[+charIndex];
            if (!node.children.size || !node.children.has(char)) {
                node.children.set(char, new TrieNode());
            }
            node.isWord = node.isWord || +charIndex === item.length - 1; //already assigned as word node.isWord ||
            node = node.children.get(char)!;
        }
    }
    delete(item: string): void {
        let node = this.root;
        for (let charIndex = 0; charIndex < item.length; charIndex++) {
            debugger;
            const char = item[charIndex];
            if (item.length - 1 === +charIndex) {
                if (node.children.get(char)?.children.size === 0) {
                    node.children.delete(char);
                } else {
                    node.isWord = false;
                }
                return;
            }

            if (node.children.has(char)) {
                node = node.children.get(char)!; //get last node that matches char
            } else return; // Prefix not found
        }
        node.isWord = false;
    }
    find(partial: string): string[] {
        let suggestedWords: string[] = [];
        //get node root
        let node = this.root;
        //loop through item if any char is inside key of children map
        //get node that contains the partial
        // let _word = "";
        for (const char of partial) {
            if (node.children.has(char)) {
                // _word += char;
                node = node.children.get(char)!;
            } else {
                return suggestedWords; // Prefix not found
            }
        }
        //get all words that are under the node
        this._dfs(node, partial, suggestedWords);
        return suggestedWords;
    }
    private _dfs(node: TrieNode, word: string, suggestedWords: string[]): void {
        //dfs here as we want him to path through all children in order
        if (!node?.children?.size) return;
        for (const [k, v] of node.children) {
            this._dfs(v, word + k, suggestedWords);
            if (node.isWord) suggestedWords.push(word + k);
        }
    }
}
