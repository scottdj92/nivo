import { LegendProps } from "@nivo/legends";
import { Component } from "react";

declare module "@nivo/radar" {
    export class Radar extends Component<RadarProps & RadarStyleProps & RadarDotProps & RadarThemeProps & RadarInteractivityProps> {}
    export class ResponsiveRadar extends Component<RadarProps & RadarStyleProps & RadarDotProps & RadarThemeProps & RadarInteractivityProps> {}
    export class RadarDots extends Component<RadarProps & RadarStyleProps & RadarDotProps & RadarThemeProps & RadarInteractivityProps> {}

    type Keys = string[] | number[];

    type RadarProps = {
        keys: Keys;
        data: Readonly<Keys>;
        indexBy: Array<string | number>;
        maxValue: Array<string | number | Function>;
        curve: "catmullRomClosed" | "basisClosed" | "cardinalClosed" | "linearClosed";
        legends: Array<LegendProps>;
    };

    type RadarStyleProps = {
        borderWidth: number;
        borderColor?: string | Function;
        gridLevels?: number;
        gridShape?: "circular" | "linear";
        gridLabel?: Function;
        gridLabelOffset?: number;
    };

    type RadarDotProps = {
        enableDots: boolean;
        dotSymbol?: Function;
        dotSize?: number;
        dotColor?: string | Function;
        enableDotLabel?: boolean;
        dotLabel?: string | Function;
        dotLabelFormat?: string;
        dotLabelYOffset?: number;
    };

    type RadarThemeProps = {
        fillOpacity?: number;
    };

    type RadarInteractivityProps = {
        isInteractive: boolean;
        tooltipFormat?: string | Function;
    }
}
