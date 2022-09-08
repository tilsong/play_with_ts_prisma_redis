import {Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";

export interface ISession extends Session, SessionData {
    userId?: number;
}

export interface IMyContext {
    req: Request;
    res: Response;
    prisma: PrismaClient;
    session: ISession
    redis: Redis;
}