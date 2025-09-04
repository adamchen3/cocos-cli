
class Engine {
    private constructor(path: string) {

    }

    static async create(path: string) {
        // TODO 根据 Engine 地址读取引擎配置文件，确认初始化信息
        return new Engine(path);
    }
}