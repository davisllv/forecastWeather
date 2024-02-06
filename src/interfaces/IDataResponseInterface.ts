export interface IDataForecastInterface {
    weekday: string;
    max: number;
    min: number;
    rain_probability: number;
    condition: string;
    date: string;
}

export interface IDataResponseInterface {
    city: string;
    hour: string;
    systemHour: string;
    date: string;
    moonPhase: string;
    forecast: IDataForecastInterface[]
};

