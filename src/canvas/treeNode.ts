export type TreeNodeChildren = Array<any> | string

export interface TreeNode {
  __v_isTreeNode: boolean
  _children: TreeNodeChildren
  parent: TreeNode | null
  root: TreeNode | null
  prev: TreeNode | string | null
  next: TreeNode | string | null
  children: TreeNodeChildren
  // parent: TreeNode | null
  _setParent(node: TreeNode): void
  _setSibling(prev: TreeNode | string | null, next: TreeNode | null): void
  hasChildren(): boolean
  appendChild(child: TreeNode): void
  prependChild(child: TreeNode): void
  removeChild(child: TreeNode): void
  append(): void
  prepend(): void
  remove(): void
}

export function isTreeNode(value: any): value is TreeNode {
  return value ? value.__v_isTreeNode === true : false
}

export function isEndNode(node) {
  return node.parent && !node.next && !node.hasChildren()
}

export function createTreeNode(children: TreeNodeChildren = []) {
  const treeNode: TreeNode = {
    __v_isTreeNode: true,
    _children: children,
    parent: null,
    root: null,
    prev: null,
    next: null,

    get children() {
      return treeNode._children
    },

    // get parent() {
    //   return treeNode._parent
    // },

    _setParent(node) {
      console.log('_setParent', treeNode, this, node)
      treeNode.parent = node
    },

    _setSibling(prev, next) {
      treeNode.prev = prev
      treeNode.next = next
    },

    hasChildren() {
      return Array.isArray(treeNode._children) && treeNode._children.length
        ? true
        : false
    },

    appendChild(child) {
      if (!isTreeNode(child)) throw Error('Unknown treeNode type')

      const prev = treeNode._children[treeNode._children.length - 1] || null
      if (prev && isTreeNode(prev)) {
        prev._setSibling(prev.prev, child)
      }

      Array.isArray(treeNode._children) && treeNode._children.push(child)

      child._setParent(this)
      child._setSibling(prev, null)
    },

    prependChild(child) {
      if (!isTreeNode(child)) throw Error('Unknown treeNode type')
    },

    removeChild(child) {
      if (!isTreeNode(child)) throw Error('Unknown treeNode type')
    },

    append() {},

    prepend() {},

    remove() {}
  }

  return treeNode
}

export function connectChildren(el) {
  if (el.hasChildren()) {
    el.children = el.children.filter((item) => {
      isTreeNode(item)
    })
    el._getChildren().map((child, index) => {
      child._setParent(el)
      child._setSibling(
        el._getChildren()[index - 1],
        el._getChildren()[index + 1]
      )
      connectChildren(child)
    })
  }
}
