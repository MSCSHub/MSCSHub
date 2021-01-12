export interface NavigationNode {
    title: string,
    url?: string,
    tooltip?: string,
    hidden?: boolean,
    children?: NavigationNode,
}

export interface NavigationViews {
    [name: string]: NavigationNode[]
}

export interface CurrentNode {
    url: string,
    view: string,
    nodes: NavigationNode[],
}