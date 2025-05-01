class DBConnection {
    static #instance: DBConnection
    public static get instance(): DBConnection {
        if (!DBConnection.#instance) {
            DBConnection.#instance = new DBConnection()
        }
        return DBConnection.#instance
    }
}