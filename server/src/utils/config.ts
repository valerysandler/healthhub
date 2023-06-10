
abstract class Config {
    public port: number = +process.env.PORT! || 3000;
}

class DevelopmentConfig extends Config {
    public mongoUri: string = process.env.MONGO_URI!;
    public constructor() {
        super();
    }
}

const config = new DevelopmentConfig();

export default config;
