declare module '@nivo/legends' {
    export type LegendAnchor =
        | 'top'
        | 'top-right'
        | 'right'
        | 'bottom-right'
        | 'bottom'
        | 'bottom-left'
        | 'left'
        | 'top-left'
        | 'center'

    export type LegendDirection = 'row' | 'column'

    export type LegendItemDirection =
        | 'left-to-right'
        | 'right-to-left'
        | 'top-to-bottom'
        | 'bottom-to-top'

    export type Box = Partial<{
        bottom: number
        left: number
        right: number
        top: number
    }>

    export type LegendSymbolShape = 'circle' | 'diamond' | 'square' | 'triangle'

    export interface LegendMouseHandlerData {
        id: string | number
        label: string
        color: string
    }

    export type LegendMouseHandler = (
        data: LegendMouseHandlerData,
        event: React.MouseEvent<any>
    ) => void

    export interface LegendEffect {
        on: 'hover'
        style: Partial<{
            itemTextColor: string
            itemBackground: string
            itemOpacity: number
            symbolSize: number
            symbolBorderWidth: number
            symbolBorderColor: string
        }>
    }

    export interface LegendProps {
        data?: Array<{
            id: string | number
            value: number
            color?: string
            fill?: string
        }>

        anchor: LegendAnchor
        direction: LegendDirection
        justify?: boolean
        padding?: number | Box
        translateX?: number
        translateY?: number

        itemWidth: number
        itemHeight: number
        itemDirection?: LegendItemDirection
        itemsSpacing?: number
        itemBackground?: string
        itemTextColor?: string
        itemOpacity?: number
        symbolSize?: number
        symbolSpacing?: number
        symbolShape?: LegendSymbolShape | any
        textColor?: string

        onClick?: LegendMouseHandler
        onMouseEnter?: LegendMouseHandler
        onMouseLeave?: LegendMouseHandler

        effects?: LegendEffect[]
    }
}
