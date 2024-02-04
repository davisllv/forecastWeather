export interface IDataForecastInterface {
    weekday: string;
    max: number;
    min: number;
    condition: string;
}

export interface IDataResponseInterface {
    city: string;
    hour: string;
    systemHour: string;
    date: string;
    moonPhase: string;
    forecast: IDataForecastInterface[]
};

