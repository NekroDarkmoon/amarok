// ----------------------------------------------------------------
//                             Imports
// ----------------------------------------------------------------
import { Client } from "discord.js";
import winston from "winston";

// ----------------------------------------------------------------
//                             Client
// ----------------------------------------------------------------
export interface IBot extends Client<true> {
  readonly config: IBotConfig;
  readonly db: IDB;
  readonly logger: winston.Logger;
  // readonly CommandHandler: ICommandHandler;
  // readonly EventHandler: IEventHandler;
  _started: boolean;
  _exited: boolean;

  start(): Promise<void>;
  close(): Promise<void>;
}

// ----------------------------------------------------------------
//                             Imports
// ----------------------------------------------------------------
export interface IBotConfig {
  readonly token: string;
}

// ----------------------------------------------------------------
//                             Imports
// ----------------------------------------------------------------

export interface IDB {}
// ----------------------------------------------------------------
//                             Imports
// ----------------------------------------------------------------
export interface ICommandHandler {}
// ----------------------------------------------------------------
//                             Imports
// ----------------------------------------------------------------
export interface IEventHandler {}
// ----------------------------------------------------------------
//                             Imports
// ----------------------------------------------------------------
// ----------------------------------------------------------------
//                             Imports
// ----------------------------------------------------------------
// ----------------------------------------------------------------
//                             Imports
// ----------------------------------------------------------------
// ----------------------------------------------------------------
//                             Imports
// ----------------------------------------------------------------