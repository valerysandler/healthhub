abstract class Config {
    public port: number = 3001;
    public mySql = { host: "", user: "", password: "", database: "" };
}

class DevelopmentConfig extends Config {
    public constructor() {
        super();
        this.mySql = { host: "localhost", user: "root", password: "", database: "____" };
    }
}

const config = new DevelopmentConfig();

export default config;
