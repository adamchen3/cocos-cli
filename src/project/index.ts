class Project {
    private constructor() {

    }

    public static async create(path: string) {
        // TODO 读取项目目录及其配置文件
        return new Project();
    }
}