import { NextFunction, Request, Response } from "express";
import pool from "../../../db/pool";

export const addTodo = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { title, description } = req.body
        const query = "INSERT INTO Todo (title,description) VALUES($1,$2) RETURNING *"
        const res = await pool.query(query, [title, description])

    } catch (error) {
        next(error)
    }
}

export const getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = "SELECT title,description from Todo ORDER BY DESC"
        const res = await pool.query(query)

    } catch (error) {
        next(error)
    }
}