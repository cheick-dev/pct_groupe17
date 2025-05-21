
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Citoyen
 * 
 */
export type Citoyen = $Result.DefaultSelection<Prisma.$CitoyenPayload>
/**
 * Model Demande
 * 
 */
export type Demande = $Result.DefaultSelection<Prisma.$DemandePayload>
/**
 * Model Document_Acte
 * 
 */
export type Document_Acte = $Result.DefaultSelection<Prisma.$Document_ActePayload>
/**
 * Model Paiement
 * 
 */
export type Paiement = $Result.DefaultSelection<Prisma.$PaiementPayload>
/**
 * Model Agent
 * 
 */
export type Agent = $Result.DefaultSelection<Prisma.$AgentPayload>
/**
 * Model Historique_Modifications
 * 
 */
export type Historique_Modifications = $Result.DefaultSelection<Prisma.$Historique_ModificationsPayload>
/**
 * Model FraisTimbre
 * 
 */
export type FraisTimbre = $Result.DefaultSelection<Prisma.$FraisTimbrePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TypeActe: {
  Naissance: 'Naissance',
  Mariage: 'Mariage',
  Décès: 'Décès'
};

export type TypeActe = (typeof TypeActe)[keyof typeof TypeActe]


export const DemandePourTier: {
  Moi: 'Moi',
  MonEnfant: 'MonEnfant',
  UnMenbreFamile: 'UnMenbreFamile',
  Autre: 'Autre'
};

export type DemandePourTier = (typeof DemandePourTier)[keyof typeof DemandePourTier]


export const StatutDemande: {
  SoumiseEnAttenteDePaiment: 'SoumiseEnAttenteDePaiment',
  SoumisePayee: 'SoumisePayee',
  EnTraitement: 'EnTraitement',
  Validée: 'Validée',
  Refusée: 'Refusée',
  Livrée: 'Livrée'
};

export type StatutDemande = (typeof StatutDemande)[keyof typeof StatutDemande]


export const ModePaiement: {
  Mobile_Money: 'Mobile_Money',
  Carte_Bancaire: 'Carte_Bancaire',
  Virement: 'Virement'
};

export type ModePaiement = (typeof ModePaiement)[keyof typeof ModePaiement]


export const RoleAgent: {
  Agent: 'Agent',
  Administrateur: 'Administrateur'
};

export type RoleAgent = (typeof RoleAgent)[keyof typeof RoleAgent]


export const TypeEntite: {
  Demande: 'Demande',
  Acte: 'Acte'
};

export type TypeEntite = (typeof TypeEntite)[keyof typeof TypeEntite]

}

export type TypeActe = $Enums.TypeActe

export const TypeActe: typeof $Enums.TypeActe

export type DemandePourTier = $Enums.DemandePourTier

export const DemandePourTier: typeof $Enums.DemandePourTier

export type StatutDemande = $Enums.StatutDemande

export const StatutDemande: typeof $Enums.StatutDemande

export type ModePaiement = $Enums.ModePaiement

export const ModePaiement: typeof $Enums.ModePaiement

export type RoleAgent = $Enums.RoleAgent

export const RoleAgent: typeof $Enums.RoleAgent

export type TypeEntite = $Enums.TypeEntite

export const TypeEntite: typeof $Enums.TypeEntite

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Citoyens
 * const citoyens = await prisma.citoyen.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Citoyens
   * const citoyens = await prisma.citoyen.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.citoyen`: Exposes CRUD operations for the **Citoyen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citoyens
    * const citoyens = await prisma.citoyen.findMany()
    * ```
    */
  get citoyen(): Prisma.CitoyenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.demande`: Exposes CRUD operations for the **Demande** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Demandes
    * const demandes = await prisma.demande.findMany()
    * ```
    */
  get demande(): Prisma.DemandeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document_Acte`: Exposes CRUD operations for the **Document_Acte** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Document_Actes
    * const document_Actes = await prisma.document_Acte.findMany()
    * ```
    */
  get document_Acte(): Prisma.Document_ActeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paiement`: Exposes CRUD operations for the **Paiement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paiements
    * const paiements = await prisma.paiement.findMany()
    * ```
    */
  get paiement(): Prisma.PaiementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agent`: Exposes CRUD operations for the **Agent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agents
    * const agents = await prisma.agent.findMany()
    * ```
    */
  get agent(): Prisma.AgentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.historique_Modifications`: Exposes CRUD operations for the **Historique_Modifications** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Historique_Modifications
    * const historique_Modifications = await prisma.historique_Modifications.findMany()
    * ```
    */
  get historique_Modifications(): Prisma.Historique_ModificationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fraisTimbre`: Exposes CRUD operations for the **FraisTimbre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FraisTimbres
    * const fraisTimbres = await prisma.fraisTimbre.findMany()
    * ```
    */
  get fraisTimbre(): Prisma.FraisTimbreDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Citoyen: 'Citoyen',
    Demande: 'Demande',
    Document_Acte: 'Document_Acte',
    Paiement: 'Paiement',
    Agent: 'Agent',
    Historique_Modifications: 'Historique_Modifications',
    FraisTimbre: 'FraisTimbre'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "citoyen" | "demande" | "document_Acte" | "paiement" | "agent" | "historique_Modifications" | "fraisTimbre"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Citoyen: {
        payload: Prisma.$CitoyenPayload<ExtArgs>
        fields: Prisma.CitoyenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitoyenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitoyenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload>
          }
          findFirst: {
            args: Prisma.CitoyenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitoyenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload>
          }
          findMany: {
            args: Prisma.CitoyenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload>[]
          }
          create: {
            args: Prisma.CitoyenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload>
          }
          createMany: {
            args: Prisma.CitoyenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CitoyenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload>[]
          }
          delete: {
            args: Prisma.CitoyenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload>
          }
          update: {
            args: Prisma.CitoyenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload>
          }
          deleteMany: {
            args: Prisma.CitoyenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitoyenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CitoyenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload>[]
          }
          upsert: {
            args: Prisma.CitoyenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitoyenPayload>
          }
          aggregate: {
            args: Prisma.CitoyenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCitoyen>
          }
          groupBy: {
            args: Prisma.CitoyenGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitoyenGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitoyenCountArgs<ExtArgs>
            result: $Utils.Optional<CitoyenCountAggregateOutputType> | number
          }
        }
      }
      Demande: {
        payload: Prisma.$DemandePayload<ExtArgs>
        fields: Prisma.DemandeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DemandeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DemandeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findFirst: {
            args: Prisma.DemandeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DemandeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          findMany: {
            args: Prisma.DemandeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          create: {
            args: Prisma.DemandeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          createMany: {
            args: Prisma.DemandeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DemandeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          delete: {
            args: Prisma.DemandeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          update: {
            args: Prisma.DemandeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          deleteMany: {
            args: Prisma.DemandeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DemandeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DemandeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>[]
          }
          upsert: {
            args: Prisma.DemandeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DemandePayload>
          }
          aggregate: {
            args: Prisma.DemandeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDemande>
          }
          groupBy: {
            args: Prisma.DemandeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DemandeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DemandeCountArgs<ExtArgs>
            result: $Utils.Optional<DemandeCountAggregateOutputType> | number
          }
        }
      }
      Document_Acte: {
        payload: Prisma.$Document_ActePayload<ExtArgs>
        fields: Prisma.Document_ActeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Document_ActeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Document_ActeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload>
          }
          findFirst: {
            args: Prisma.Document_ActeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Document_ActeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload>
          }
          findMany: {
            args: Prisma.Document_ActeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload>[]
          }
          create: {
            args: Prisma.Document_ActeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload>
          }
          createMany: {
            args: Prisma.Document_ActeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Document_ActeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload>[]
          }
          delete: {
            args: Prisma.Document_ActeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload>
          }
          update: {
            args: Prisma.Document_ActeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload>
          }
          deleteMany: {
            args: Prisma.Document_ActeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Document_ActeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Document_ActeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload>[]
          }
          upsert: {
            args: Prisma.Document_ActeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Document_ActePayload>
          }
          aggregate: {
            args: Prisma.Document_ActeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument_Acte>
          }
          groupBy: {
            args: Prisma.Document_ActeGroupByArgs<ExtArgs>
            result: $Utils.Optional<Document_ActeGroupByOutputType>[]
          }
          count: {
            args: Prisma.Document_ActeCountArgs<ExtArgs>
            result: $Utils.Optional<Document_ActeCountAggregateOutputType> | number
          }
        }
      }
      Paiement: {
        payload: Prisma.$PaiementPayload<ExtArgs>
        fields: Prisma.PaiementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaiementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaiementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findFirst: {
            args: Prisma.PaiementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaiementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          findMany: {
            args: Prisma.PaiementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          create: {
            args: Prisma.PaiementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          createMany: {
            args: Prisma.PaiementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaiementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          delete: {
            args: Prisma.PaiementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          update: {
            args: Prisma.PaiementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          deleteMany: {
            args: Prisma.PaiementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaiementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaiementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>[]
          }
          upsert: {
            args: Prisma.PaiementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaiementPayload>
          }
          aggregate: {
            args: Prisma.PaiementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaiement>
          }
          groupBy: {
            args: Prisma.PaiementGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaiementGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaiementCountArgs<ExtArgs>
            result: $Utils.Optional<PaiementCountAggregateOutputType> | number
          }
        }
      }
      Agent: {
        payload: Prisma.$AgentPayload<ExtArgs>
        fields: Prisma.AgentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findFirst: {
            args: Prisma.AgentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          findMany: {
            args: Prisma.AgentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          create: {
            args: Prisma.AgentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          createMany: {
            args: Prisma.AgentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          delete: {
            args: Prisma.AgentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          update: {
            args: Prisma.AgentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          deleteMany: {
            args: Prisma.AgentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>[]
          }
          upsert: {
            args: Prisma.AgentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentPayload>
          }
          aggregate: {
            args: Prisma.AgentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgent>
          }
          groupBy: {
            args: Prisma.AgentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentCountArgs<ExtArgs>
            result: $Utils.Optional<AgentCountAggregateOutputType> | number
          }
        }
      }
      Historique_Modifications: {
        payload: Prisma.$Historique_ModificationsPayload<ExtArgs>
        fields: Prisma.Historique_ModificationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Historique_ModificationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Historique_ModificationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload>
          }
          findFirst: {
            args: Prisma.Historique_ModificationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Historique_ModificationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload>
          }
          findMany: {
            args: Prisma.Historique_ModificationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload>[]
          }
          create: {
            args: Prisma.Historique_ModificationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload>
          }
          createMany: {
            args: Prisma.Historique_ModificationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Historique_ModificationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload>[]
          }
          delete: {
            args: Prisma.Historique_ModificationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload>
          }
          update: {
            args: Prisma.Historique_ModificationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload>
          }
          deleteMany: {
            args: Prisma.Historique_ModificationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Historique_ModificationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Historique_ModificationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload>[]
          }
          upsert: {
            args: Prisma.Historique_ModificationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Historique_ModificationsPayload>
          }
          aggregate: {
            args: Prisma.Historique_ModificationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistorique_Modifications>
          }
          groupBy: {
            args: Prisma.Historique_ModificationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Historique_ModificationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Historique_ModificationsCountArgs<ExtArgs>
            result: $Utils.Optional<Historique_ModificationsCountAggregateOutputType> | number
          }
        }
      }
      FraisTimbre: {
        payload: Prisma.$FraisTimbrePayload<ExtArgs>
        fields: Prisma.FraisTimbreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FraisTimbreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FraisTimbreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload>
          }
          findFirst: {
            args: Prisma.FraisTimbreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FraisTimbreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload>
          }
          findMany: {
            args: Prisma.FraisTimbreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload>[]
          }
          create: {
            args: Prisma.FraisTimbreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload>
          }
          createMany: {
            args: Prisma.FraisTimbreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FraisTimbreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload>[]
          }
          delete: {
            args: Prisma.FraisTimbreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload>
          }
          update: {
            args: Prisma.FraisTimbreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload>
          }
          deleteMany: {
            args: Prisma.FraisTimbreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FraisTimbreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FraisTimbreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload>[]
          }
          upsert: {
            args: Prisma.FraisTimbreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FraisTimbrePayload>
          }
          aggregate: {
            args: Prisma.FraisTimbreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFraisTimbre>
          }
          groupBy: {
            args: Prisma.FraisTimbreGroupByArgs<ExtArgs>
            result: $Utils.Optional<FraisTimbreGroupByOutputType>[]
          }
          count: {
            args: Prisma.FraisTimbreCountArgs<ExtArgs>
            result: $Utils.Optional<FraisTimbreCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    citoyen?: CitoyenOmit
    demande?: DemandeOmit
    document_Acte?: Document_ActeOmit
    paiement?: PaiementOmit
    agent?: AgentOmit
    historique_Modifications?: Historique_ModificationsOmit
    fraisTimbre?: FraisTimbreOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CitoyenCountOutputType
   */

  export type CitoyenCountOutputType = {
    Demandes: number
  }

  export type CitoyenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Demandes?: boolean | CitoyenCountOutputTypeCountDemandesArgs
  }

  // Custom InputTypes
  /**
   * CitoyenCountOutputType without action
   */
  export type CitoyenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CitoyenCountOutputType
     */
    select?: CitoyenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CitoyenCountOutputType without action
   */
  export type CitoyenCountOutputTypeCountDemandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
  }


  /**
   * Count Type DemandeCountOutputType
   */

  export type DemandeCountOutputType = {
    Historique: number
  }

  export type DemandeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Historique?: boolean | DemandeCountOutputTypeCountHistoriqueArgs
  }

  // Custom InputTypes
  /**
   * DemandeCountOutputType without action
   */
  export type DemandeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DemandeCountOutputType
     */
    select?: DemandeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DemandeCountOutputType without action
   */
  export type DemandeCountOutputTypeCountHistoriqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historique_ModificationsWhereInput
  }


  /**
   * Count Type Document_ActeCountOutputType
   */

  export type Document_ActeCountOutputType = {
    Historique: number
  }

  export type Document_ActeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Historique?: boolean | Document_ActeCountOutputTypeCountHistoriqueArgs
  }

  // Custom InputTypes
  /**
   * Document_ActeCountOutputType without action
   */
  export type Document_ActeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_ActeCountOutputType
     */
    select?: Document_ActeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Document_ActeCountOutputType without action
   */
  export type Document_ActeCountOutputTypeCountHistoriqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historique_ModificationsWhereInput
  }


  /**
   * Count Type AgentCountOutputType
   */

  export type AgentCountOutputType = {
    Documents: number
    Historiques: number
  }

  export type AgentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documents?: boolean | AgentCountOutputTypeCountDocumentsArgs
    Historiques?: boolean | AgentCountOutputTypeCountHistoriquesArgs
  }

  // Custom InputTypes
  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentCountOutputType
     */
    select?: AgentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Document_ActeWhereInput
  }

  /**
   * AgentCountOutputType without action
   */
  export type AgentCountOutputTypeCountHistoriquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historique_ModificationsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Citoyen
   */

  export type AggregateCitoyen = {
    _count: CitoyenCountAggregateOutputType | null
    _min: CitoyenMinAggregateOutputType | null
    _max: CitoyenMaxAggregateOutputType | null
  }

  export type CitoyenMinAggregateOutputType = {
    ID_Citoyen: string | null
    Nom: string | null
    Prenom: string | null
    DateNaissance: Date | null
    LieuNaissance: string | null
    Adresse: string | null
    Email: string | null
    Telephone: string | null
    Password: string | null
  }

  export type CitoyenMaxAggregateOutputType = {
    ID_Citoyen: string | null
    Nom: string | null
    Prenom: string | null
    DateNaissance: Date | null
    LieuNaissance: string | null
    Adresse: string | null
    Email: string | null
    Telephone: string | null
    Password: string | null
  }

  export type CitoyenCountAggregateOutputType = {
    ID_Citoyen: number
    Nom: number
    Prenom: number
    DateNaissance: number
    LieuNaissance: number
    Adresse: number
    Email: number
    Telephone: number
    Password: number
    _all: number
  }


  export type CitoyenMinAggregateInputType = {
    ID_Citoyen?: true
    Nom?: true
    Prenom?: true
    DateNaissance?: true
    LieuNaissance?: true
    Adresse?: true
    Email?: true
    Telephone?: true
    Password?: true
  }

  export type CitoyenMaxAggregateInputType = {
    ID_Citoyen?: true
    Nom?: true
    Prenom?: true
    DateNaissance?: true
    LieuNaissance?: true
    Adresse?: true
    Email?: true
    Telephone?: true
    Password?: true
  }

  export type CitoyenCountAggregateInputType = {
    ID_Citoyen?: true
    Nom?: true
    Prenom?: true
    DateNaissance?: true
    LieuNaissance?: true
    Adresse?: true
    Email?: true
    Telephone?: true
    Password?: true
    _all?: true
  }

  export type CitoyenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citoyen to aggregate.
     */
    where?: CitoyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citoyens to fetch.
     */
    orderBy?: CitoyenOrderByWithRelationInput | CitoyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitoyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citoyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citoyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citoyens
    **/
    _count?: true | CitoyenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitoyenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitoyenMaxAggregateInputType
  }

  export type GetCitoyenAggregateType<T extends CitoyenAggregateArgs> = {
        [P in keyof T & keyof AggregateCitoyen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCitoyen[P]>
      : GetScalarType<T[P], AggregateCitoyen[P]>
  }




  export type CitoyenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitoyenWhereInput
    orderBy?: CitoyenOrderByWithAggregationInput | CitoyenOrderByWithAggregationInput[]
    by: CitoyenScalarFieldEnum[] | CitoyenScalarFieldEnum
    having?: CitoyenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitoyenCountAggregateInputType | true
    _min?: CitoyenMinAggregateInputType
    _max?: CitoyenMaxAggregateInputType
  }

  export type CitoyenGroupByOutputType = {
    ID_Citoyen: string
    Nom: string
    Prenom: string
    DateNaissance: Date
    LieuNaissance: string
    Adresse: string
    Email: string
    Telephone: string
    Password: string
    _count: CitoyenCountAggregateOutputType | null
    _min: CitoyenMinAggregateOutputType | null
    _max: CitoyenMaxAggregateOutputType | null
  }

  type GetCitoyenGroupByPayload<T extends CitoyenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitoyenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitoyenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitoyenGroupByOutputType[P]>
            : GetScalarType<T[P], CitoyenGroupByOutputType[P]>
        }
      >
    >


  export type CitoyenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Citoyen?: boolean
    Nom?: boolean
    Prenom?: boolean
    DateNaissance?: boolean
    LieuNaissance?: boolean
    Adresse?: boolean
    Email?: boolean
    Telephone?: boolean
    Password?: boolean
    Demandes?: boolean | Citoyen$DemandesArgs<ExtArgs>
    _count?: boolean | CitoyenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["citoyen"]>

  export type CitoyenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Citoyen?: boolean
    Nom?: boolean
    Prenom?: boolean
    DateNaissance?: boolean
    LieuNaissance?: boolean
    Adresse?: boolean
    Email?: boolean
    Telephone?: boolean
    Password?: boolean
  }, ExtArgs["result"]["citoyen"]>

  export type CitoyenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Citoyen?: boolean
    Nom?: boolean
    Prenom?: boolean
    DateNaissance?: boolean
    LieuNaissance?: boolean
    Adresse?: boolean
    Email?: boolean
    Telephone?: boolean
    Password?: boolean
  }, ExtArgs["result"]["citoyen"]>

  export type CitoyenSelectScalar = {
    ID_Citoyen?: boolean
    Nom?: boolean
    Prenom?: boolean
    DateNaissance?: boolean
    LieuNaissance?: boolean
    Adresse?: boolean
    Email?: boolean
    Telephone?: boolean
    Password?: boolean
  }

  export type CitoyenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Citoyen" | "Nom" | "Prenom" | "DateNaissance" | "LieuNaissance" | "Adresse" | "Email" | "Telephone" | "Password", ExtArgs["result"]["citoyen"]>
  export type CitoyenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Demandes?: boolean | Citoyen$DemandesArgs<ExtArgs>
    _count?: boolean | CitoyenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CitoyenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CitoyenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CitoyenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Citoyen"
    objects: {
      Demandes: Prisma.$DemandePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Citoyen: string
      Nom: string
      Prenom: string
      DateNaissance: Date
      LieuNaissance: string
      Adresse: string
      Email: string
      Telephone: string
      Password: string
    }, ExtArgs["result"]["citoyen"]>
    composites: {}
  }

  type CitoyenGetPayload<S extends boolean | null | undefined | CitoyenDefaultArgs> = $Result.GetResult<Prisma.$CitoyenPayload, S>

  type CitoyenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitoyenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitoyenCountAggregateInputType | true
    }

  export interface CitoyenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Citoyen'], meta: { name: 'Citoyen' } }
    /**
     * Find zero or one Citoyen that matches the filter.
     * @param {CitoyenFindUniqueArgs} args - Arguments to find a Citoyen
     * @example
     * // Get one Citoyen
     * const citoyen = await prisma.citoyen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitoyenFindUniqueArgs>(args: SelectSubset<T, CitoyenFindUniqueArgs<ExtArgs>>): Prisma__CitoyenClient<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Citoyen that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitoyenFindUniqueOrThrowArgs} args - Arguments to find a Citoyen
     * @example
     * // Get one Citoyen
     * const citoyen = await prisma.citoyen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitoyenFindUniqueOrThrowArgs>(args: SelectSubset<T, CitoyenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitoyenClient<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Citoyen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitoyenFindFirstArgs} args - Arguments to find a Citoyen
     * @example
     * // Get one Citoyen
     * const citoyen = await prisma.citoyen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitoyenFindFirstArgs>(args?: SelectSubset<T, CitoyenFindFirstArgs<ExtArgs>>): Prisma__CitoyenClient<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Citoyen that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitoyenFindFirstOrThrowArgs} args - Arguments to find a Citoyen
     * @example
     * // Get one Citoyen
     * const citoyen = await prisma.citoyen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitoyenFindFirstOrThrowArgs>(args?: SelectSubset<T, CitoyenFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitoyenClient<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citoyens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitoyenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citoyens
     * const citoyens = await prisma.citoyen.findMany()
     * 
     * // Get first 10 Citoyens
     * const citoyens = await prisma.citoyen.findMany({ take: 10 })
     * 
     * // Only select the `ID_Citoyen`
     * const citoyenWithID_CitoyenOnly = await prisma.citoyen.findMany({ select: { ID_Citoyen: true } })
     * 
     */
    findMany<T extends CitoyenFindManyArgs>(args?: SelectSubset<T, CitoyenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Citoyen.
     * @param {CitoyenCreateArgs} args - Arguments to create a Citoyen.
     * @example
     * // Create one Citoyen
     * const Citoyen = await prisma.citoyen.create({
     *   data: {
     *     // ... data to create a Citoyen
     *   }
     * })
     * 
     */
    create<T extends CitoyenCreateArgs>(args: SelectSubset<T, CitoyenCreateArgs<ExtArgs>>): Prisma__CitoyenClient<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citoyens.
     * @param {CitoyenCreateManyArgs} args - Arguments to create many Citoyens.
     * @example
     * // Create many Citoyens
     * const citoyen = await prisma.citoyen.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitoyenCreateManyArgs>(args?: SelectSubset<T, CitoyenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Citoyens and returns the data saved in the database.
     * @param {CitoyenCreateManyAndReturnArgs} args - Arguments to create many Citoyens.
     * @example
     * // Create many Citoyens
     * const citoyen = await prisma.citoyen.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Citoyens and only return the `ID_Citoyen`
     * const citoyenWithID_CitoyenOnly = await prisma.citoyen.createManyAndReturn({
     *   select: { ID_Citoyen: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CitoyenCreateManyAndReturnArgs>(args?: SelectSubset<T, CitoyenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Citoyen.
     * @param {CitoyenDeleteArgs} args - Arguments to delete one Citoyen.
     * @example
     * // Delete one Citoyen
     * const Citoyen = await prisma.citoyen.delete({
     *   where: {
     *     // ... filter to delete one Citoyen
     *   }
     * })
     * 
     */
    delete<T extends CitoyenDeleteArgs>(args: SelectSubset<T, CitoyenDeleteArgs<ExtArgs>>): Prisma__CitoyenClient<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Citoyen.
     * @param {CitoyenUpdateArgs} args - Arguments to update one Citoyen.
     * @example
     * // Update one Citoyen
     * const citoyen = await prisma.citoyen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitoyenUpdateArgs>(args: SelectSubset<T, CitoyenUpdateArgs<ExtArgs>>): Prisma__CitoyenClient<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citoyens.
     * @param {CitoyenDeleteManyArgs} args - Arguments to filter Citoyens to delete.
     * @example
     * // Delete a few Citoyens
     * const { count } = await prisma.citoyen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitoyenDeleteManyArgs>(args?: SelectSubset<T, CitoyenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citoyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitoyenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citoyens
     * const citoyen = await prisma.citoyen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitoyenUpdateManyArgs>(args: SelectSubset<T, CitoyenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citoyens and returns the data updated in the database.
     * @param {CitoyenUpdateManyAndReturnArgs} args - Arguments to update many Citoyens.
     * @example
     * // Update many Citoyens
     * const citoyen = await prisma.citoyen.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Citoyens and only return the `ID_Citoyen`
     * const citoyenWithID_CitoyenOnly = await prisma.citoyen.updateManyAndReturn({
     *   select: { ID_Citoyen: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CitoyenUpdateManyAndReturnArgs>(args: SelectSubset<T, CitoyenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Citoyen.
     * @param {CitoyenUpsertArgs} args - Arguments to update or create a Citoyen.
     * @example
     * // Update or create a Citoyen
     * const citoyen = await prisma.citoyen.upsert({
     *   create: {
     *     // ... data to create a Citoyen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Citoyen we want to update
     *   }
     * })
     */
    upsert<T extends CitoyenUpsertArgs>(args: SelectSubset<T, CitoyenUpsertArgs<ExtArgs>>): Prisma__CitoyenClient<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citoyens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitoyenCountArgs} args - Arguments to filter Citoyens to count.
     * @example
     * // Count the number of Citoyens
     * const count = await prisma.citoyen.count({
     *   where: {
     *     // ... the filter for the Citoyens we want to count
     *   }
     * })
    **/
    count<T extends CitoyenCountArgs>(
      args?: Subset<T, CitoyenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitoyenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Citoyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitoyenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitoyenAggregateArgs>(args: Subset<T, CitoyenAggregateArgs>): Prisma.PrismaPromise<GetCitoyenAggregateType<T>>

    /**
     * Group by Citoyen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitoyenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CitoyenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitoyenGroupByArgs['orderBy'] }
        : { orderBy?: CitoyenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CitoyenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitoyenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Citoyen model
   */
  readonly fields: CitoyenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Citoyen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitoyenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Demandes<T extends Citoyen$DemandesArgs<ExtArgs> = {}>(args?: Subset<T, Citoyen$DemandesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Citoyen model
   */
  interface CitoyenFieldRefs {
    readonly ID_Citoyen: FieldRef<"Citoyen", 'String'>
    readonly Nom: FieldRef<"Citoyen", 'String'>
    readonly Prenom: FieldRef<"Citoyen", 'String'>
    readonly DateNaissance: FieldRef<"Citoyen", 'DateTime'>
    readonly LieuNaissance: FieldRef<"Citoyen", 'String'>
    readonly Adresse: FieldRef<"Citoyen", 'String'>
    readonly Email: FieldRef<"Citoyen", 'String'>
    readonly Telephone: FieldRef<"Citoyen", 'String'>
    readonly Password: FieldRef<"Citoyen", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Citoyen findUnique
   */
  export type CitoyenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
    /**
     * Filter, which Citoyen to fetch.
     */
    where: CitoyenWhereUniqueInput
  }

  /**
   * Citoyen findUniqueOrThrow
   */
  export type CitoyenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
    /**
     * Filter, which Citoyen to fetch.
     */
    where: CitoyenWhereUniqueInput
  }

  /**
   * Citoyen findFirst
   */
  export type CitoyenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
    /**
     * Filter, which Citoyen to fetch.
     */
    where?: CitoyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citoyens to fetch.
     */
    orderBy?: CitoyenOrderByWithRelationInput | CitoyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citoyens.
     */
    cursor?: CitoyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citoyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citoyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citoyens.
     */
    distinct?: CitoyenScalarFieldEnum | CitoyenScalarFieldEnum[]
  }

  /**
   * Citoyen findFirstOrThrow
   */
  export type CitoyenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
    /**
     * Filter, which Citoyen to fetch.
     */
    where?: CitoyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citoyens to fetch.
     */
    orderBy?: CitoyenOrderByWithRelationInput | CitoyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citoyens.
     */
    cursor?: CitoyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citoyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citoyens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citoyens.
     */
    distinct?: CitoyenScalarFieldEnum | CitoyenScalarFieldEnum[]
  }

  /**
   * Citoyen findMany
   */
  export type CitoyenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
    /**
     * Filter, which Citoyens to fetch.
     */
    where?: CitoyenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citoyens to fetch.
     */
    orderBy?: CitoyenOrderByWithRelationInput | CitoyenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citoyens.
     */
    cursor?: CitoyenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citoyens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citoyens.
     */
    skip?: number
    distinct?: CitoyenScalarFieldEnum | CitoyenScalarFieldEnum[]
  }

  /**
   * Citoyen create
   */
  export type CitoyenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
    /**
     * The data needed to create a Citoyen.
     */
    data: XOR<CitoyenCreateInput, CitoyenUncheckedCreateInput>
  }

  /**
   * Citoyen createMany
   */
  export type CitoyenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citoyens.
     */
    data: CitoyenCreateManyInput | CitoyenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Citoyen createManyAndReturn
   */
  export type CitoyenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * The data used to create many Citoyens.
     */
    data: CitoyenCreateManyInput | CitoyenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Citoyen update
   */
  export type CitoyenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
    /**
     * The data needed to update a Citoyen.
     */
    data: XOR<CitoyenUpdateInput, CitoyenUncheckedUpdateInput>
    /**
     * Choose, which Citoyen to update.
     */
    where: CitoyenWhereUniqueInput
  }

  /**
   * Citoyen updateMany
   */
  export type CitoyenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citoyens.
     */
    data: XOR<CitoyenUpdateManyMutationInput, CitoyenUncheckedUpdateManyInput>
    /**
     * Filter which Citoyens to update
     */
    where?: CitoyenWhereInput
    /**
     * Limit how many Citoyens to update.
     */
    limit?: number
  }

  /**
   * Citoyen updateManyAndReturn
   */
  export type CitoyenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * The data used to update Citoyens.
     */
    data: XOR<CitoyenUpdateManyMutationInput, CitoyenUncheckedUpdateManyInput>
    /**
     * Filter which Citoyens to update
     */
    where?: CitoyenWhereInput
    /**
     * Limit how many Citoyens to update.
     */
    limit?: number
  }

  /**
   * Citoyen upsert
   */
  export type CitoyenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
    /**
     * The filter to search for the Citoyen to update in case it exists.
     */
    where: CitoyenWhereUniqueInput
    /**
     * In case the Citoyen found by the `where` argument doesn't exist, create a new Citoyen with this data.
     */
    create: XOR<CitoyenCreateInput, CitoyenUncheckedCreateInput>
    /**
     * In case the Citoyen was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitoyenUpdateInput, CitoyenUncheckedUpdateInput>
  }

  /**
   * Citoyen delete
   */
  export type CitoyenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
    /**
     * Filter which Citoyen to delete.
     */
    where: CitoyenWhereUniqueInput
  }

  /**
   * Citoyen deleteMany
   */
  export type CitoyenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citoyens to delete
     */
    where?: CitoyenWhereInput
    /**
     * Limit how many Citoyens to delete.
     */
    limit?: number
  }

  /**
   * Citoyen.Demandes
   */
  export type Citoyen$DemandesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    cursor?: DemandeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Citoyen without action
   */
  export type CitoyenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Citoyen
     */
    select?: CitoyenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Citoyen
     */
    omit?: CitoyenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitoyenInclude<ExtArgs> | null
  }


  /**
   * Model Demande
   */

  export type AggregateDemande = {
    _count: DemandeCountAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  export type DemandeMinAggregateOutputType = {
    ID_Demande: string | null
    ID_Citoyen: string | null
    TypeActe: $Enums.TypeActe | null
    NumeroActe: string | null
    Nom: string | null
    Prenom: string | null
    Statut: $Enums.StatutDemande | null
    DemandePourTier: $Enums.DemandePourTier | null
    DateDemande: Date | null
    DateActe: Date | null
    ID_Paiement: string | null
  }

  export type DemandeMaxAggregateOutputType = {
    ID_Demande: string | null
    ID_Citoyen: string | null
    TypeActe: $Enums.TypeActe | null
    NumeroActe: string | null
    Nom: string | null
    Prenom: string | null
    Statut: $Enums.StatutDemande | null
    DemandePourTier: $Enums.DemandePourTier | null
    DateDemande: Date | null
    DateActe: Date | null
    ID_Paiement: string | null
  }

  export type DemandeCountAggregateOutputType = {
    ID_Demande: number
    ID_Citoyen: number
    TypeActe: number
    NumeroActe: number
    Nom: number
    Prenom: number
    Statut: number
    DemandePourTier: number
    DateDemande: number
    DateActe: number
    ID_Paiement: number
    _all: number
  }


  export type DemandeMinAggregateInputType = {
    ID_Demande?: true
    ID_Citoyen?: true
    TypeActe?: true
    NumeroActe?: true
    Nom?: true
    Prenom?: true
    Statut?: true
    DemandePourTier?: true
    DateDemande?: true
    DateActe?: true
    ID_Paiement?: true
  }

  export type DemandeMaxAggregateInputType = {
    ID_Demande?: true
    ID_Citoyen?: true
    TypeActe?: true
    NumeroActe?: true
    Nom?: true
    Prenom?: true
    Statut?: true
    DemandePourTier?: true
    DateDemande?: true
    DateActe?: true
    ID_Paiement?: true
  }

  export type DemandeCountAggregateInputType = {
    ID_Demande?: true
    ID_Citoyen?: true
    TypeActe?: true
    NumeroActe?: true
    Nom?: true
    Prenom?: true
    Statut?: true
    DemandePourTier?: true
    DateDemande?: true
    DateActe?: true
    ID_Paiement?: true
    _all?: true
  }

  export type DemandeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demande to aggregate.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Demandes
    **/
    _count?: true | DemandeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DemandeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DemandeMaxAggregateInputType
  }

  export type GetDemandeAggregateType<T extends DemandeAggregateArgs> = {
        [P in keyof T & keyof AggregateDemande]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDemande[P]>
      : GetScalarType<T[P], AggregateDemande[P]>
  }




  export type DemandeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DemandeWhereInput
    orderBy?: DemandeOrderByWithAggregationInput | DemandeOrderByWithAggregationInput[]
    by: DemandeScalarFieldEnum[] | DemandeScalarFieldEnum
    having?: DemandeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DemandeCountAggregateInputType | true
    _min?: DemandeMinAggregateInputType
    _max?: DemandeMaxAggregateInputType
  }

  export type DemandeGroupByOutputType = {
    ID_Demande: string
    ID_Citoyen: string
    TypeActe: $Enums.TypeActe
    NumeroActe: string
    Nom: string
    Prenom: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date
    DateActe: Date | null
    ID_Paiement: string | null
    _count: DemandeCountAggregateOutputType | null
    _min: DemandeMinAggregateOutputType | null
    _max: DemandeMaxAggregateOutputType | null
  }

  type GetDemandeGroupByPayload<T extends DemandeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DemandeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DemandeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DemandeGroupByOutputType[P]>
            : GetScalarType<T[P], DemandeGroupByOutputType[P]>
        }
      >
    >


  export type DemandeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Demande?: boolean
    ID_Citoyen?: boolean
    TypeActe?: boolean
    NumeroActe?: boolean
    Nom?: boolean
    Prenom?: boolean
    Statut?: boolean
    DemandePourTier?: boolean
    DateDemande?: boolean
    DateActe?: boolean
    ID_Paiement?: boolean
    Citoyen?: boolean | CitoyenDefaultArgs<ExtArgs>
    Paiement?: boolean | Demande$PaiementArgs<ExtArgs>
    Document?: boolean | Demande$DocumentArgs<ExtArgs>
    Historique?: boolean | Demande$HistoriqueArgs<ExtArgs>
    _count?: boolean | DemandeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>

  export type DemandeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Demande?: boolean
    ID_Citoyen?: boolean
    TypeActe?: boolean
    NumeroActe?: boolean
    Nom?: boolean
    Prenom?: boolean
    Statut?: boolean
    DemandePourTier?: boolean
    DateDemande?: boolean
    DateActe?: boolean
    ID_Paiement?: boolean
    Citoyen?: boolean | CitoyenDefaultArgs<ExtArgs>
    Paiement?: boolean | Demande$PaiementArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>

  export type DemandeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Demande?: boolean
    ID_Citoyen?: boolean
    TypeActe?: boolean
    NumeroActe?: boolean
    Nom?: boolean
    Prenom?: boolean
    Statut?: boolean
    DemandePourTier?: boolean
    DateDemande?: boolean
    DateActe?: boolean
    ID_Paiement?: boolean
    Citoyen?: boolean | CitoyenDefaultArgs<ExtArgs>
    Paiement?: boolean | Demande$PaiementArgs<ExtArgs>
  }, ExtArgs["result"]["demande"]>

  export type DemandeSelectScalar = {
    ID_Demande?: boolean
    ID_Citoyen?: boolean
    TypeActe?: boolean
    NumeroActe?: boolean
    Nom?: boolean
    Prenom?: boolean
    Statut?: boolean
    DemandePourTier?: boolean
    DateDemande?: boolean
    DateActe?: boolean
    ID_Paiement?: boolean
  }

  export type DemandeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Demande" | "ID_Citoyen" | "TypeActe" | "NumeroActe" | "Nom" | "Prenom" | "Statut" | "DemandePourTier" | "DateDemande" | "DateActe" | "ID_Paiement", ExtArgs["result"]["demande"]>
  export type DemandeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Citoyen?: boolean | CitoyenDefaultArgs<ExtArgs>
    Paiement?: boolean | Demande$PaiementArgs<ExtArgs>
    Document?: boolean | Demande$DocumentArgs<ExtArgs>
    Historique?: boolean | Demande$HistoriqueArgs<ExtArgs>
    _count?: boolean | DemandeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DemandeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Citoyen?: boolean | CitoyenDefaultArgs<ExtArgs>
    Paiement?: boolean | Demande$PaiementArgs<ExtArgs>
  }
  export type DemandeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Citoyen?: boolean | CitoyenDefaultArgs<ExtArgs>
    Paiement?: boolean | Demande$PaiementArgs<ExtArgs>
  }

  export type $DemandePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Demande"
    objects: {
      Citoyen: Prisma.$CitoyenPayload<ExtArgs>
      Paiement: Prisma.$PaiementPayload<ExtArgs> | null
      Document: Prisma.$Document_ActePayload<ExtArgs> | null
      Historique: Prisma.$Historique_ModificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Demande: string
      ID_Citoyen: string
      TypeActe: $Enums.TypeActe
      NumeroActe: string
      Nom: string
      Prenom: string
      Statut: $Enums.StatutDemande
      DemandePourTier: $Enums.DemandePourTier
      DateDemande: Date
      DateActe: Date | null
      ID_Paiement: string | null
    }, ExtArgs["result"]["demande"]>
    composites: {}
  }

  type DemandeGetPayload<S extends boolean | null | undefined | DemandeDefaultArgs> = $Result.GetResult<Prisma.$DemandePayload, S>

  type DemandeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DemandeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DemandeCountAggregateInputType | true
    }

  export interface DemandeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Demande'], meta: { name: 'Demande' } }
    /**
     * Find zero or one Demande that matches the filter.
     * @param {DemandeFindUniqueArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DemandeFindUniqueArgs>(args: SelectSubset<T, DemandeFindUniqueArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Demande that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DemandeFindUniqueOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DemandeFindUniqueOrThrowArgs>(args: SelectSubset<T, DemandeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DemandeFindFirstArgs>(args?: SelectSubset<T, DemandeFindFirstArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Demande that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindFirstOrThrowArgs} args - Arguments to find a Demande
     * @example
     * // Get one Demande
     * const demande = await prisma.demande.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DemandeFindFirstOrThrowArgs>(args?: SelectSubset<T, DemandeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Demandes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Demandes
     * const demandes = await prisma.demande.findMany()
     * 
     * // Get first 10 Demandes
     * const demandes = await prisma.demande.findMany({ take: 10 })
     * 
     * // Only select the `ID_Demande`
     * const demandeWithID_DemandeOnly = await prisma.demande.findMany({ select: { ID_Demande: true } })
     * 
     */
    findMany<T extends DemandeFindManyArgs>(args?: SelectSubset<T, DemandeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Demande.
     * @param {DemandeCreateArgs} args - Arguments to create a Demande.
     * @example
     * // Create one Demande
     * const Demande = await prisma.demande.create({
     *   data: {
     *     // ... data to create a Demande
     *   }
     * })
     * 
     */
    create<T extends DemandeCreateArgs>(args: SelectSubset<T, DemandeCreateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Demandes.
     * @param {DemandeCreateManyArgs} args - Arguments to create many Demandes.
     * @example
     * // Create many Demandes
     * const demande = await prisma.demande.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DemandeCreateManyArgs>(args?: SelectSubset<T, DemandeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Demandes and returns the data saved in the database.
     * @param {DemandeCreateManyAndReturnArgs} args - Arguments to create many Demandes.
     * @example
     * // Create many Demandes
     * const demande = await prisma.demande.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Demandes and only return the `ID_Demande`
     * const demandeWithID_DemandeOnly = await prisma.demande.createManyAndReturn({
     *   select: { ID_Demande: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DemandeCreateManyAndReturnArgs>(args?: SelectSubset<T, DemandeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Demande.
     * @param {DemandeDeleteArgs} args - Arguments to delete one Demande.
     * @example
     * // Delete one Demande
     * const Demande = await prisma.demande.delete({
     *   where: {
     *     // ... filter to delete one Demande
     *   }
     * })
     * 
     */
    delete<T extends DemandeDeleteArgs>(args: SelectSubset<T, DemandeDeleteArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Demande.
     * @param {DemandeUpdateArgs} args - Arguments to update one Demande.
     * @example
     * // Update one Demande
     * const demande = await prisma.demande.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DemandeUpdateArgs>(args: SelectSubset<T, DemandeUpdateArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Demandes.
     * @param {DemandeDeleteManyArgs} args - Arguments to filter Demandes to delete.
     * @example
     * // Delete a few Demandes
     * const { count } = await prisma.demande.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DemandeDeleteManyArgs>(args?: SelectSubset<T, DemandeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Demandes
     * const demande = await prisma.demande.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DemandeUpdateManyArgs>(args: SelectSubset<T, DemandeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Demandes and returns the data updated in the database.
     * @param {DemandeUpdateManyAndReturnArgs} args - Arguments to update many Demandes.
     * @example
     * // Update many Demandes
     * const demande = await prisma.demande.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Demandes and only return the `ID_Demande`
     * const demandeWithID_DemandeOnly = await prisma.demande.updateManyAndReturn({
     *   select: { ID_Demande: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DemandeUpdateManyAndReturnArgs>(args: SelectSubset<T, DemandeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Demande.
     * @param {DemandeUpsertArgs} args - Arguments to update or create a Demande.
     * @example
     * // Update or create a Demande
     * const demande = await prisma.demande.upsert({
     *   create: {
     *     // ... data to create a Demande
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Demande we want to update
     *   }
     * })
     */
    upsert<T extends DemandeUpsertArgs>(args: SelectSubset<T, DemandeUpsertArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Demandes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeCountArgs} args - Arguments to filter Demandes to count.
     * @example
     * // Count the number of Demandes
     * const count = await prisma.demande.count({
     *   where: {
     *     // ... the filter for the Demandes we want to count
     *   }
     * })
    **/
    count<T extends DemandeCountArgs>(
      args?: Subset<T, DemandeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DemandeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DemandeAggregateArgs>(args: Subset<T, DemandeAggregateArgs>): Prisma.PrismaPromise<GetDemandeAggregateType<T>>

    /**
     * Group by Demande.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DemandeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DemandeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DemandeGroupByArgs['orderBy'] }
        : { orderBy?: DemandeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DemandeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Demande model
   */
  readonly fields: DemandeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Demande.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DemandeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Citoyen<T extends CitoyenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CitoyenDefaultArgs<ExtArgs>>): Prisma__CitoyenClient<$Result.GetResult<Prisma.$CitoyenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Paiement<T extends Demande$PaiementArgs<ExtArgs> = {}>(args?: Subset<T, Demande$PaiementArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Document<T extends Demande$DocumentArgs<ExtArgs> = {}>(args?: Subset<T, Demande$DocumentArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Historique<T extends Demande$HistoriqueArgs<ExtArgs> = {}>(args?: Subset<T, Demande$HistoriqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Demande model
   */
  interface DemandeFieldRefs {
    readonly ID_Demande: FieldRef<"Demande", 'String'>
    readonly ID_Citoyen: FieldRef<"Demande", 'String'>
    readonly TypeActe: FieldRef<"Demande", 'TypeActe'>
    readonly NumeroActe: FieldRef<"Demande", 'String'>
    readonly Nom: FieldRef<"Demande", 'String'>
    readonly Prenom: FieldRef<"Demande", 'String'>
    readonly Statut: FieldRef<"Demande", 'StatutDemande'>
    readonly DemandePourTier: FieldRef<"Demande", 'DemandePourTier'>
    readonly DateDemande: FieldRef<"Demande", 'DateTime'>
    readonly DateActe: FieldRef<"Demande", 'DateTime'>
    readonly ID_Paiement: FieldRef<"Demande", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Demande findUnique
   */
  export type DemandeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findUniqueOrThrow
   */
  export type DemandeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande findFirst
   */
  export type DemandeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findFirstOrThrow
   */
  export type DemandeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demande to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Demandes.
     */
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande findMany
   */
  export type DemandeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter, which Demandes to fetch.
     */
    where?: DemandeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Demandes to fetch.
     */
    orderBy?: DemandeOrderByWithRelationInput | DemandeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Demandes.
     */
    cursor?: DemandeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Demandes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Demandes.
     */
    skip?: number
    distinct?: DemandeScalarFieldEnum | DemandeScalarFieldEnum[]
  }

  /**
   * Demande create
   */
  export type DemandeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to create a Demande.
     */
    data: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
  }

  /**
   * Demande createMany
   */
  export type DemandeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Demandes.
     */
    data: DemandeCreateManyInput | DemandeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Demande createManyAndReturn
   */
  export type DemandeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * The data used to create many Demandes.
     */
    data: DemandeCreateManyInput | DemandeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demande update
   */
  export type DemandeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The data needed to update a Demande.
     */
    data: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
    /**
     * Choose, which Demande to update.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande updateMany
   */
  export type DemandeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Demandes.
     */
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyInput>
    /**
     * Filter which Demandes to update
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to update.
     */
    limit?: number
  }

  /**
   * Demande updateManyAndReturn
   */
  export type DemandeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * The data used to update Demandes.
     */
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyInput>
    /**
     * Filter which Demandes to update
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Demande upsert
   */
  export type DemandeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * The filter to search for the Demande to update in case it exists.
     */
    where: DemandeWhereUniqueInput
    /**
     * In case the Demande found by the `where` argument doesn't exist, create a new Demande with this data.
     */
    create: XOR<DemandeCreateInput, DemandeUncheckedCreateInput>
    /**
     * In case the Demande was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DemandeUpdateInput, DemandeUncheckedUpdateInput>
  }

  /**
   * Demande delete
   */
  export type DemandeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    /**
     * Filter which Demande to delete.
     */
    where: DemandeWhereUniqueInput
  }

  /**
   * Demande deleteMany
   */
  export type DemandeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Demandes to delete
     */
    where?: DemandeWhereInput
    /**
     * Limit how many Demandes to delete.
     */
    limit?: number
  }

  /**
   * Demande.Paiement
   */
  export type Demande$PaiementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    where?: PaiementWhereInput
  }

  /**
   * Demande.Document
   */
  export type Demande$DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    where?: Document_ActeWhereInput
  }

  /**
   * Demande.Historique
   */
  export type Demande$HistoriqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    where?: Historique_ModificationsWhereInput
    orderBy?: Historique_ModificationsOrderByWithRelationInput | Historique_ModificationsOrderByWithRelationInput[]
    cursor?: Historique_ModificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historique_ModificationsScalarFieldEnum | Historique_ModificationsScalarFieldEnum[]
  }

  /**
   * Demande without action
   */
  export type DemandeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
  }


  /**
   * Model Document_Acte
   */

  export type AggregateDocument_Acte = {
    _count: Document_ActeCountAggregateOutputType | null
    _min: Document_ActeMinAggregateOutputType | null
    _max: Document_ActeMaxAggregateOutputType | null
  }

  export type Document_ActeMinAggregateOutputType = {
    ID_Document_Acte: string | null
    ID_Demande: string | null
    ID_Agent: string | null
    DateDelivrance: Date | null
    Fichier_PDF: string | null
    SignatureNumerique: string | null
    EstArchive: boolean | null
    DateArchivage: Date | null
  }

  export type Document_ActeMaxAggregateOutputType = {
    ID_Document_Acte: string | null
    ID_Demande: string | null
    ID_Agent: string | null
    DateDelivrance: Date | null
    Fichier_PDF: string | null
    SignatureNumerique: string | null
    EstArchive: boolean | null
    DateArchivage: Date | null
  }

  export type Document_ActeCountAggregateOutputType = {
    ID_Document_Acte: number
    ID_Demande: number
    ID_Agent: number
    DateDelivrance: number
    Fichier_PDF: number
    SignatureNumerique: number
    EstArchive: number
    DateArchivage: number
    _all: number
  }


  export type Document_ActeMinAggregateInputType = {
    ID_Document_Acte?: true
    ID_Demande?: true
    ID_Agent?: true
    DateDelivrance?: true
    Fichier_PDF?: true
    SignatureNumerique?: true
    EstArchive?: true
    DateArchivage?: true
  }

  export type Document_ActeMaxAggregateInputType = {
    ID_Document_Acte?: true
    ID_Demande?: true
    ID_Agent?: true
    DateDelivrance?: true
    Fichier_PDF?: true
    SignatureNumerique?: true
    EstArchive?: true
    DateArchivage?: true
  }

  export type Document_ActeCountAggregateInputType = {
    ID_Document_Acte?: true
    ID_Demande?: true
    ID_Agent?: true
    DateDelivrance?: true
    Fichier_PDF?: true
    SignatureNumerique?: true
    EstArchive?: true
    DateArchivage?: true
    _all?: true
  }

  export type Document_ActeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document_Acte to aggregate.
     */
    where?: Document_ActeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Document_Actes to fetch.
     */
    orderBy?: Document_ActeOrderByWithRelationInput | Document_ActeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Document_ActeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Document_Actes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Document_Actes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Document_Actes
    **/
    _count?: true | Document_ActeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Document_ActeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Document_ActeMaxAggregateInputType
  }

  export type GetDocument_ActeAggregateType<T extends Document_ActeAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument_Acte]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument_Acte[P]>
      : GetScalarType<T[P], AggregateDocument_Acte[P]>
  }




  export type Document_ActeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Document_ActeWhereInput
    orderBy?: Document_ActeOrderByWithAggregationInput | Document_ActeOrderByWithAggregationInput[]
    by: Document_ActeScalarFieldEnum[] | Document_ActeScalarFieldEnum
    having?: Document_ActeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Document_ActeCountAggregateInputType | true
    _min?: Document_ActeMinAggregateInputType
    _max?: Document_ActeMaxAggregateInputType
  }

  export type Document_ActeGroupByOutputType = {
    ID_Document_Acte: string
    ID_Demande: string
    ID_Agent: string
    DateDelivrance: Date
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date
    _count: Document_ActeCountAggregateOutputType | null
    _min: Document_ActeMinAggregateOutputType | null
    _max: Document_ActeMaxAggregateOutputType | null
  }

  type GetDocument_ActeGroupByPayload<T extends Document_ActeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Document_ActeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Document_ActeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Document_ActeGroupByOutputType[P]>
            : GetScalarType<T[P], Document_ActeGroupByOutputType[P]>
        }
      >
    >


  export type Document_ActeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Document_Acte?: boolean
    ID_Demande?: boolean
    ID_Agent?: boolean
    DateDelivrance?: boolean
    Fichier_PDF?: boolean
    SignatureNumerique?: boolean
    EstArchive?: boolean
    DateArchivage?: boolean
    Demande?: boolean | DemandeDefaultArgs<ExtArgs>
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
    Historique?: boolean | Document_Acte$HistoriqueArgs<ExtArgs>
    _count?: boolean | Document_ActeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_Acte"]>

  export type Document_ActeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Document_Acte?: boolean
    ID_Demande?: boolean
    ID_Agent?: boolean
    DateDelivrance?: boolean
    Fichier_PDF?: boolean
    SignatureNumerique?: boolean
    EstArchive?: boolean
    DateArchivage?: boolean
    Demande?: boolean | DemandeDefaultArgs<ExtArgs>
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_Acte"]>

  export type Document_ActeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Document_Acte?: boolean
    ID_Demande?: boolean
    ID_Agent?: boolean
    DateDelivrance?: boolean
    Fichier_PDF?: boolean
    SignatureNumerique?: boolean
    EstArchive?: boolean
    DateArchivage?: boolean
    Demande?: boolean | DemandeDefaultArgs<ExtArgs>
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_Acte"]>

  export type Document_ActeSelectScalar = {
    ID_Document_Acte?: boolean
    ID_Demande?: boolean
    ID_Agent?: boolean
    DateDelivrance?: boolean
    Fichier_PDF?: boolean
    SignatureNumerique?: boolean
    EstArchive?: boolean
    DateArchivage?: boolean
  }

  export type Document_ActeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Document_Acte" | "ID_Demande" | "ID_Agent" | "DateDelivrance" | "Fichier_PDF" | "SignatureNumerique" | "EstArchive" | "DateArchivage", ExtArgs["result"]["document_Acte"]>
  export type Document_ActeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Demande?: boolean | DemandeDefaultArgs<ExtArgs>
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
    Historique?: boolean | Document_Acte$HistoriqueArgs<ExtArgs>
    _count?: boolean | Document_ActeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Document_ActeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Demande?: boolean | DemandeDefaultArgs<ExtArgs>
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
  }
  export type Document_ActeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Demande?: boolean | DemandeDefaultArgs<ExtArgs>
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
  }

  export type $Document_ActePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document_Acte"
    objects: {
      Demande: Prisma.$DemandePayload<ExtArgs>
      Agent: Prisma.$AgentPayload<ExtArgs>
      Historique: Prisma.$Historique_ModificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Document_Acte: string
      ID_Demande: string
      ID_Agent: string
      DateDelivrance: Date
      Fichier_PDF: string
      SignatureNumerique: string
      EstArchive: boolean
      DateArchivage: Date
    }, ExtArgs["result"]["document_Acte"]>
    composites: {}
  }

  type Document_ActeGetPayload<S extends boolean | null | undefined | Document_ActeDefaultArgs> = $Result.GetResult<Prisma.$Document_ActePayload, S>

  type Document_ActeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Document_ActeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Document_ActeCountAggregateInputType | true
    }

  export interface Document_ActeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document_Acte'], meta: { name: 'Document_Acte' } }
    /**
     * Find zero or one Document_Acte that matches the filter.
     * @param {Document_ActeFindUniqueArgs} args - Arguments to find a Document_Acte
     * @example
     * // Get one Document_Acte
     * const document_Acte = await prisma.document_Acte.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Document_ActeFindUniqueArgs>(args: SelectSubset<T, Document_ActeFindUniqueArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document_Acte that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Document_ActeFindUniqueOrThrowArgs} args - Arguments to find a Document_Acte
     * @example
     * // Get one Document_Acte
     * const document_Acte = await prisma.document_Acte.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Document_ActeFindUniqueOrThrowArgs>(args: SelectSubset<T, Document_ActeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_Acte that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_ActeFindFirstArgs} args - Arguments to find a Document_Acte
     * @example
     * // Get one Document_Acte
     * const document_Acte = await prisma.document_Acte.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Document_ActeFindFirstArgs>(args?: SelectSubset<T, Document_ActeFindFirstArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_Acte that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_ActeFindFirstOrThrowArgs} args - Arguments to find a Document_Acte
     * @example
     * // Get one Document_Acte
     * const document_Acte = await prisma.document_Acte.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Document_ActeFindFirstOrThrowArgs>(args?: SelectSubset<T, Document_ActeFindFirstOrThrowArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Document_Actes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_ActeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Document_Actes
     * const document_Actes = await prisma.document_Acte.findMany()
     * 
     * // Get first 10 Document_Actes
     * const document_Actes = await prisma.document_Acte.findMany({ take: 10 })
     * 
     * // Only select the `ID_Document_Acte`
     * const document_ActeWithID_Document_ActeOnly = await prisma.document_Acte.findMany({ select: { ID_Document_Acte: true } })
     * 
     */
    findMany<T extends Document_ActeFindManyArgs>(args?: SelectSubset<T, Document_ActeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document_Acte.
     * @param {Document_ActeCreateArgs} args - Arguments to create a Document_Acte.
     * @example
     * // Create one Document_Acte
     * const Document_Acte = await prisma.document_Acte.create({
     *   data: {
     *     // ... data to create a Document_Acte
     *   }
     * })
     * 
     */
    create<T extends Document_ActeCreateArgs>(args: SelectSubset<T, Document_ActeCreateArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Document_Actes.
     * @param {Document_ActeCreateManyArgs} args - Arguments to create many Document_Actes.
     * @example
     * // Create many Document_Actes
     * const document_Acte = await prisma.document_Acte.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Document_ActeCreateManyArgs>(args?: SelectSubset<T, Document_ActeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Document_Actes and returns the data saved in the database.
     * @param {Document_ActeCreateManyAndReturnArgs} args - Arguments to create many Document_Actes.
     * @example
     * // Create many Document_Actes
     * const document_Acte = await prisma.document_Acte.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Document_Actes and only return the `ID_Document_Acte`
     * const document_ActeWithID_Document_ActeOnly = await prisma.document_Acte.createManyAndReturn({
     *   select: { ID_Document_Acte: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Document_ActeCreateManyAndReturnArgs>(args?: SelectSubset<T, Document_ActeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document_Acte.
     * @param {Document_ActeDeleteArgs} args - Arguments to delete one Document_Acte.
     * @example
     * // Delete one Document_Acte
     * const Document_Acte = await prisma.document_Acte.delete({
     *   where: {
     *     // ... filter to delete one Document_Acte
     *   }
     * })
     * 
     */
    delete<T extends Document_ActeDeleteArgs>(args: SelectSubset<T, Document_ActeDeleteArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document_Acte.
     * @param {Document_ActeUpdateArgs} args - Arguments to update one Document_Acte.
     * @example
     * // Update one Document_Acte
     * const document_Acte = await prisma.document_Acte.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Document_ActeUpdateArgs>(args: SelectSubset<T, Document_ActeUpdateArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Document_Actes.
     * @param {Document_ActeDeleteManyArgs} args - Arguments to filter Document_Actes to delete.
     * @example
     * // Delete a few Document_Actes
     * const { count } = await prisma.document_Acte.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Document_ActeDeleteManyArgs>(args?: SelectSubset<T, Document_ActeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_Actes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_ActeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Document_Actes
     * const document_Acte = await prisma.document_Acte.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Document_ActeUpdateManyArgs>(args: SelectSubset<T, Document_ActeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_Actes and returns the data updated in the database.
     * @param {Document_ActeUpdateManyAndReturnArgs} args - Arguments to update many Document_Actes.
     * @example
     * // Update many Document_Actes
     * const document_Acte = await prisma.document_Acte.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Document_Actes and only return the `ID_Document_Acte`
     * const document_ActeWithID_Document_ActeOnly = await prisma.document_Acte.updateManyAndReturn({
     *   select: { ID_Document_Acte: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Document_ActeUpdateManyAndReturnArgs>(args: SelectSubset<T, Document_ActeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document_Acte.
     * @param {Document_ActeUpsertArgs} args - Arguments to update or create a Document_Acte.
     * @example
     * // Update or create a Document_Acte
     * const document_Acte = await prisma.document_Acte.upsert({
     *   create: {
     *     // ... data to create a Document_Acte
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document_Acte we want to update
     *   }
     * })
     */
    upsert<T extends Document_ActeUpsertArgs>(args: SelectSubset<T, Document_ActeUpsertArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Document_Actes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_ActeCountArgs} args - Arguments to filter Document_Actes to count.
     * @example
     * // Count the number of Document_Actes
     * const count = await prisma.document_Acte.count({
     *   where: {
     *     // ... the filter for the Document_Actes we want to count
     *   }
     * })
    **/
    count<T extends Document_ActeCountArgs>(
      args?: Subset<T, Document_ActeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Document_ActeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document_Acte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_ActeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Document_ActeAggregateArgs>(args: Subset<T, Document_ActeAggregateArgs>): Prisma.PrismaPromise<GetDocument_ActeAggregateType<T>>

    /**
     * Group by Document_Acte.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_ActeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Document_ActeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Document_ActeGroupByArgs['orderBy'] }
        : { orderBy?: Document_ActeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Document_ActeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocument_ActeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document_Acte model
   */
  readonly fields: Document_ActeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document_Acte.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Document_ActeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Demande<T extends DemandeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DemandeDefaultArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Historique<T extends Document_Acte$HistoriqueArgs<ExtArgs> = {}>(args?: Subset<T, Document_Acte$HistoriqueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document_Acte model
   */
  interface Document_ActeFieldRefs {
    readonly ID_Document_Acte: FieldRef<"Document_Acte", 'String'>
    readonly ID_Demande: FieldRef<"Document_Acte", 'String'>
    readonly ID_Agent: FieldRef<"Document_Acte", 'String'>
    readonly DateDelivrance: FieldRef<"Document_Acte", 'DateTime'>
    readonly Fichier_PDF: FieldRef<"Document_Acte", 'String'>
    readonly SignatureNumerique: FieldRef<"Document_Acte", 'String'>
    readonly EstArchive: FieldRef<"Document_Acte", 'Boolean'>
    readonly DateArchivage: FieldRef<"Document_Acte", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Document_Acte findUnique
   */
  export type Document_ActeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    /**
     * Filter, which Document_Acte to fetch.
     */
    where: Document_ActeWhereUniqueInput
  }

  /**
   * Document_Acte findUniqueOrThrow
   */
  export type Document_ActeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    /**
     * Filter, which Document_Acte to fetch.
     */
    where: Document_ActeWhereUniqueInput
  }

  /**
   * Document_Acte findFirst
   */
  export type Document_ActeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    /**
     * Filter, which Document_Acte to fetch.
     */
    where?: Document_ActeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Document_Actes to fetch.
     */
    orderBy?: Document_ActeOrderByWithRelationInput | Document_ActeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Document_Actes.
     */
    cursor?: Document_ActeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Document_Actes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Document_Actes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Document_Actes.
     */
    distinct?: Document_ActeScalarFieldEnum | Document_ActeScalarFieldEnum[]
  }

  /**
   * Document_Acte findFirstOrThrow
   */
  export type Document_ActeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    /**
     * Filter, which Document_Acte to fetch.
     */
    where?: Document_ActeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Document_Actes to fetch.
     */
    orderBy?: Document_ActeOrderByWithRelationInput | Document_ActeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Document_Actes.
     */
    cursor?: Document_ActeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Document_Actes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Document_Actes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Document_Actes.
     */
    distinct?: Document_ActeScalarFieldEnum | Document_ActeScalarFieldEnum[]
  }

  /**
   * Document_Acte findMany
   */
  export type Document_ActeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    /**
     * Filter, which Document_Actes to fetch.
     */
    where?: Document_ActeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Document_Actes to fetch.
     */
    orderBy?: Document_ActeOrderByWithRelationInput | Document_ActeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Document_Actes.
     */
    cursor?: Document_ActeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Document_Actes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Document_Actes.
     */
    skip?: number
    distinct?: Document_ActeScalarFieldEnum | Document_ActeScalarFieldEnum[]
  }

  /**
   * Document_Acte create
   */
  export type Document_ActeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    /**
     * The data needed to create a Document_Acte.
     */
    data: XOR<Document_ActeCreateInput, Document_ActeUncheckedCreateInput>
  }

  /**
   * Document_Acte createMany
   */
  export type Document_ActeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Document_Actes.
     */
    data: Document_ActeCreateManyInput | Document_ActeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document_Acte createManyAndReturn
   */
  export type Document_ActeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * The data used to create many Document_Actes.
     */
    data: Document_ActeCreateManyInput | Document_ActeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document_Acte update
   */
  export type Document_ActeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    /**
     * The data needed to update a Document_Acte.
     */
    data: XOR<Document_ActeUpdateInput, Document_ActeUncheckedUpdateInput>
    /**
     * Choose, which Document_Acte to update.
     */
    where: Document_ActeWhereUniqueInput
  }

  /**
   * Document_Acte updateMany
   */
  export type Document_ActeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Document_Actes.
     */
    data: XOR<Document_ActeUpdateManyMutationInput, Document_ActeUncheckedUpdateManyInput>
    /**
     * Filter which Document_Actes to update
     */
    where?: Document_ActeWhereInput
    /**
     * Limit how many Document_Actes to update.
     */
    limit?: number
  }

  /**
   * Document_Acte updateManyAndReturn
   */
  export type Document_ActeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * The data used to update Document_Actes.
     */
    data: XOR<Document_ActeUpdateManyMutationInput, Document_ActeUncheckedUpdateManyInput>
    /**
     * Filter which Document_Actes to update
     */
    where?: Document_ActeWhereInput
    /**
     * Limit how many Document_Actes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Document_Acte upsert
   */
  export type Document_ActeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    /**
     * The filter to search for the Document_Acte to update in case it exists.
     */
    where: Document_ActeWhereUniqueInput
    /**
     * In case the Document_Acte found by the `where` argument doesn't exist, create a new Document_Acte with this data.
     */
    create: XOR<Document_ActeCreateInput, Document_ActeUncheckedCreateInput>
    /**
     * In case the Document_Acte was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Document_ActeUpdateInput, Document_ActeUncheckedUpdateInput>
  }

  /**
   * Document_Acte delete
   */
  export type Document_ActeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    /**
     * Filter which Document_Acte to delete.
     */
    where: Document_ActeWhereUniqueInput
  }

  /**
   * Document_Acte deleteMany
   */
  export type Document_ActeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document_Actes to delete
     */
    where?: Document_ActeWhereInput
    /**
     * Limit how many Document_Actes to delete.
     */
    limit?: number
  }

  /**
   * Document_Acte.Historique
   */
  export type Document_Acte$HistoriqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    where?: Historique_ModificationsWhereInput
    orderBy?: Historique_ModificationsOrderByWithRelationInput | Historique_ModificationsOrderByWithRelationInput[]
    cursor?: Historique_ModificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historique_ModificationsScalarFieldEnum | Historique_ModificationsScalarFieldEnum[]
  }

  /**
   * Document_Acte without action
   */
  export type Document_ActeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
  }


  /**
   * Model Paiement
   */

  export type AggregatePaiement = {
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  export type PaiementAvgAggregateOutputType = {
    Montant: Decimal | null
  }

  export type PaiementSumAggregateOutputType = {
    Montant: Decimal | null
  }

  export type PaiementMinAggregateOutputType = {
    ID_Paiement: string | null
    Montant: Decimal | null
    ModePaiement: $Enums.ModePaiement | null
    DatePaiement: Date | null
    Transaction_ID: string | null
  }

  export type PaiementMaxAggregateOutputType = {
    ID_Paiement: string | null
    Montant: Decimal | null
    ModePaiement: $Enums.ModePaiement | null
    DatePaiement: Date | null
    Transaction_ID: string | null
  }

  export type PaiementCountAggregateOutputType = {
    ID_Paiement: number
    Montant: number
    ModePaiement: number
    DatePaiement: number
    Transaction_ID: number
    _all: number
  }


  export type PaiementAvgAggregateInputType = {
    Montant?: true
  }

  export type PaiementSumAggregateInputType = {
    Montant?: true
  }

  export type PaiementMinAggregateInputType = {
    ID_Paiement?: true
    Montant?: true
    ModePaiement?: true
    DatePaiement?: true
    Transaction_ID?: true
  }

  export type PaiementMaxAggregateInputType = {
    ID_Paiement?: true
    Montant?: true
    ModePaiement?: true
    DatePaiement?: true
    Transaction_ID?: true
  }

  export type PaiementCountAggregateInputType = {
    ID_Paiement?: true
    Montant?: true
    ModePaiement?: true
    DatePaiement?: true
    Transaction_ID?: true
    _all?: true
  }

  export type PaiementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiement to aggregate.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paiements
    **/
    _count?: true | PaiementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaiementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaiementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaiementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaiementMaxAggregateInputType
  }

  export type GetPaiementAggregateType<T extends PaiementAggregateArgs> = {
        [P in keyof T & keyof AggregatePaiement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaiement[P]>
      : GetScalarType<T[P], AggregatePaiement[P]>
  }




  export type PaiementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaiementWhereInput
    orderBy?: PaiementOrderByWithAggregationInput | PaiementOrderByWithAggregationInput[]
    by: PaiementScalarFieldEnum[] | PaiementScalarFieldEnum
    having?: PaiementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaiementCountAggregateInputType | true
    _avg?: PaiementAvgAggregateInputType
    _sum?: PaiementSumAggregateInputType
    _min?: PaiementMinAggregateInputType
    _max?: PaiementMaxAggregateInputType
  }

  export type PaiementGroupByOutputType = {
    ID_Paiement: string
    Montant: Decimal
    ModePaiement: $Enums.ModePaiement
    DatePaiement: Date
    Transaction_ID: string
    _count: PaiementCountAggregateOutputType | null
    _avg: PaiementAvgAggregateOutputType | null
    _sum: PaiementSumAggregateOutputType | null
    _min: PaiementMinAggregateOutputType | null
    _max: PaiementMaxAggregateOutputType | null
  }

  type GetPaiementGroupByPayload<T extends PaiementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaiementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaiementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaiementGroupByOutputType[P]>
            : GetScalarType<T[P], PaiementGroupByOutputType[P]>
        }
      >
    >


  export type PaiementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Paiement?: boolean
    Montant?: boolean
    ModePaiement?: boolean
    DatePaiement?: boolean
    Transaction_ID?: boolean
    Demande?: boolean | Paiement$DemandeArgs<ExtArgs>
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Paiement?: boolean
    Montant?: boolean
    ModePaiement?: boolean
    DatePaiement?: boolean
    Transaction_ID?: boolean
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Paiement?: boolean
    Montant?: boolean
    ModePaiement?: boolean
    DatePaiement?: boolean
    Transaction_ID?: boolean
  }, ExtArgs["result"]["paiement"]>

  export type PaiementSelectScalar = {
    ID_Paiement?: boolean
    Montant?: boolean
    ModePaiement?: boolean
    DatePaiement?: boolean
    Transaction_ID?: boolean
  }

  export type PaiementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Paiement" | "Montant" | "ModePaiement" | "DatePaiement" | "Transaction_ID", ExtArgs["result"]["paiement"]>
  export type PaiementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Demande?: boolean | Paiement$DemandeArgs<ExtArgs>
  }
  export type PaiementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaiementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaiementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paiement"
    objects: {
      Demande: Prisma.$DemandePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Paiement: string
      Montant: Prisma.Decimal
      ModePaiement: $Enums.ModePaiement
      DatePaiement: Date
      Transaction_ID: string
    }, ExtArgs["result"]["paiement"]>
    composites: {}
  }

  type PaiementGetPayload<S extends boolean | null | undefined | PaiementDefaultArgs> = $Result.GetResult<Prisma.$PaiementPayload, S>

  type PaiementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaiementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaiementCountAggregateInputType | true
    }

  export interface PaiementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paiement'], meta: { name: 'Paiement' } }
    /**
     * Find zero or one Paiement that matches the filter.
     * @param {PaiementFindUniqueArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaiementFindUniqueArgs>(args: SelectSubset<T, PaiementFindUniqueArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paiement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaiementFindUniqueOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaiementFindUniqueOrThrowArgs>(args: SelectSubset<T, PaiementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaiementFindFirstArgs>(args?: SelectSubset<T, PaiementFindFirstArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paiement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindFirstOrThrowArgs} args - Arguments to find a Paiement
     * @example
     * // Get one Paiement
     * const paiement = await prisma.paiement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaiementFindFirstOrThrowArgs>(args?: SelectSubset<T, PaiementFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paiements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paiements
     * const paiements = await prisma.paiement.findMany()
     * 
     * // Get first 10 Paiements
     * const paiements = await prisma.paiement.findMany({ take: 10 })
     * 
     * // Only select the `ID_Paiement`
     * const paiementWithID_PaiementOnly = await prisma.paiement.findMany({ select: { ID_Paiement: true } })
     * 
     */
    findMany<T extends PaiementFindManyArgs>(args?: SelectSubset<T, PaiementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paiement.
     * @param {PaiementCreateArgs} args - Arguments to create a Paiement.
     * @example
     * // Create one Paiement
     * const Paiement = await prisma.paiement.create({
     *   data: {
     *     // ... data to create a Paiement
     *   }
     * })
     * 
     */
    create<T extends PaiementCreateArgs>(args: SelectSubset<T, PaiementCreateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paiements.
     * @param {PaiementCreateManyArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaiementCreateManyArgs>(args?: SelectSubset<T, PaiementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paiements and returns the data saved in the database.
     * @param {PaiementCreateManyAndReturnArgs} args - Arguments to create many Paiements.
     * @example
     * // Create many Paiements
     * const paiement = await prisma.paiement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paiements and only return the `ID_Paiement`
     * const paiementWithID_PaiementOnly = await prisma.paiement.createManyAndReturn({
     *   select: { ID_Paiement: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaiementCreateManyAndReturnArgs>(args?: SelectSubset<T, PaiementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paiement.
     * @param {PaiementDeleteArgs} args - Arguments to delete one Paiement.
     * @example
     * // Delete one Paiement
     * const Paiement = await prisma.paiement.delete({
     *   where: {
     *     // ... filter to delete one Paiement
     *   }
     * })
     * 
     */
    delete<T extends PaiementDeleteArgs>(args: SelectSubset<T, PaiementDeleteArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paiement.
     * @param {PaiementUpdateArgs} args - Arguments to update one Paiement.
     * @example
     * // Update one Paiement
     * const paiement = await prisma.paiement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaiementUpdateArgs>(args: SelectSubset<T, PaiementUpdateArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paiements.
     * @param {PaiementDeleteManyArgs} args - Arguments to filter Paiements to delete.
     * @example
     * // Delete a few Paiements
     * const { count } = await prisma.paiement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaiementDeleteManyArgs>(args?: SelectSubset<T, PaiementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaiementUpdateManyArgs>(args: SelectSubset<T, PaiementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paiements and returns the data updated in the database.
     * @param {PaiementUpdateManyAndReturnArgs} args - Arguments to update many Paiements.
     * @example
     * // Update many Paiements
     * const paiement = await prisma.paiement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paiements and only return the `ID_Paiement`
     * const paiementWithID_PaiementOnly = await prisma.paiement.updateManyAndReturn({
     *   select: { ID_Paiement: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaiementUpdateManyAndReturnArgs>(args: SelectSubset<T, PaiementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paiement.
     * @param {PaiementUpsertArgs} args - Arguments to update or create a Paiement.
     * @example
     * // Update or create a Paiement
     * const paiement = await prisma.paiement.upsert({
     *   create: {
     *     // ... data to create a Paiement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paiement we want to update
     *   }
     * })
     */
    upsert<T extends PaiementUpsertArgs>(args: SelectSubset<T, PaiementUpsertArgs<ExtArgs>>): Prisma__PaiementClient<$Result.GetResult<Prisma.$PaiementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paiements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementCountArgs} args - Arguments to filter Paiements to count.
     * @example
     * // Count the number of Paiements
     * const count = await prisma.paiement.count({
     *   where: {
     *     // ... the filter for the Paiements we want to count
     *   }
     * })
    **/
    count<T extends PaiementCountArgs>(
      args?: Subset<T, PaiementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaiementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaiementAggregateArgs>(args: Subset<T, PaiementAggregateArgs>): Prisma.PrismaPromise<GetPaiementAggregateType<T>>

    /**
     * Group by Paiement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaiementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaiementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaiementGroupByArgs['orderBy'] }
        : { orderBy?: PaiementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaiementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaiementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paiement model
   */
  readonly fields: PaiementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paiement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaiementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Demande<T extends Paiement$DemandeArgs<ExtArgs> = {}>(args?: Subset<T, Paiement$DemandeArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paiement model
   */
  interface PaiementFieldRefs {
    readonly ID_Paiement: FieldRef<"Paiement", 'String'>
    readonly Montant: FieldRef<"Paiement", 'Decimal'>
    readonly ModePaiement: FieldRef<"Paiement", 'ModePaiement'>
    readonly DatePaiement: FieldRef<"Paiement", 'DateTime'>
    readonly Transaction_ID: FieldRef<"Paiement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Paiement findUnique
   */
  export type PaiementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findUniqueOrThrow
   */
  export type PaiementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement findFirst
   */
  export type PaiementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findFirstOrThrow
   */
  export type PaiementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiement to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paiements.
     */
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement findMany
   */
  export type PaiementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter, which Paiements to fetch.
     */
    where?: PaiementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paiements to fetch.
     */
    orderBy?: PaiementOrderByWithRelationInput | PaiementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paiements.
     */
    cursor?: PaiementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paiements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paiements.
     */
    skip?: number
    distinct?: PaiementScalarFieldEnum | PaiementScalarFieldEnum[]
  }

  /**
   * Paiement create
   */
  export type PaiementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to create a Paiement.
     */
    data: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
  }

  /**
   * Paiement createMany
   */
  export type PaiementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement createManyAndReturn
   */
  export type PaiementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to create many Paiements.
     */
    data: PaiementCreateManyInput | PaiementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paiement update
   */
  export type PaiementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The data needed to update a Paiement.
     */
    data: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
    /**
     * Choose, which Paiement to update.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement updateMany
   */
  export type PaiementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement updateManyAndReturn
   */
  export type PaiementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * The data used to update Paiements.
     */
    data: XOR<PaiementUpdateManyMutationInput, PaiementUncheckedUpdateManyInput>
    /**
     * Filter which Paiements to update
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to update.
     */
    limit?: number
  }

  /**
   * Paiement upsert
   */
  export type PaiementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * The filter to search for the Paiement to update in case it exists.
     */
    where: PaiementWhereUniqueInput
    /**
     * In case the Paiement found by the `where` argument doesn't exist, create a new Paiement with this data.
     */
    create: XOR<PaiementCreateInput, PaiementUncheckedCreateInput>
    /**
     * In case the Paiement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaiementUpdateInput, PaiementUncheckedUpdateInput>
  }

  /**
   * Paiement delete
   */
  export type PaiementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
    /**
     * Filter which Paiement to delete.
     */
    where: PaiementWhereUniqueInput
  }

  /**
   * Paiement deleteMany
   */
  export type PaiementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paiements to delete
     */
    where?: PaiementWhereInput
    /**
     * Limit how many Paiements to delete.
     */
    limit?: number
  }

  /**
   * Paiement.Demande
   */
  export type Paiement$DemandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
  }

  /**
   * Paiement without action
   */
  export type PaiementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paiement
     */
    select?: PaiementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paiement
     */
    omit?: PaiementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaiementInclude<ExtArgs> | null
  }


  /**
   * Model Agent
   */

  export type AggregateAgent = {
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  export type AgentMinAggregateOutputType = {
    ID_Agent: string | null
    Nom: string | null
    Prenom: string | null
    Email: string | null
    Role: $Enums.RoleAgent | null
    Password: string | null
  }

  export type AgentMaxAggregateOutputType = {
    ID_Agent: string | null
    Nom: string | null
    Prenom: string | null
    Email: string | null
    Role: $Enums.RoleAgent | null
    Password: string | null
  }

  export type AgentCountAggregateOutputType = {
    ID_Agent: number
    Nom: number
    Prenom: number
    Email: number
    Role: number
    Password: number
    _all: number
  }


  export type AgentMinAggregateInputType = {
    ID_Agent?: true
    Nom?: true
    Prenom?: true
    Email?: true
    Role?: true
    Password?: true
  }

  export type AgentMaxAggregateInputType = {
    ID_Agent?: true
    Nom?: true
    Prenom?: true
    Email?: true
    Role?: true
    Password?: true
  }

  export type AgentCountAggregateInputType = {
    ID_Agent?: true
    Nom?: true
    Prenom?: true
    Email?: true
    Role?: true
    Password?: true
    _all?: true
  }

  export type AgentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agent to aggregate.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Agents
    **/
    _count?: true | AgentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentMaxAggregateInputType
  }

  export type GetAgentAggregateType<T extends AgentAggregateArgs> = {
        [P in keyof T & keyof AggregateAgent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgent[P]>
      : GetScalarType<T[P], AggregateAgent[P]>
  }




  export type AgentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentWhereInput
    orderBy?: AgentOrderByWithAggregationInput | AgentOrderByWithAggregationInput[]
    by: AgentScalarFieldEnum[] | AgentScalarFieldEnum
    having?: AgentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentCountAggregateInputType | true
    _min?: AgentMinAggregateInputType
    _max?: AgentMaxAggregateInputType
  }

  export type AgentGroupByOutputType = {
    ID_Agent: string
    Nom: string
    Prenom: string
    Email: string
    Role: $Enums.RoleAgent
    Password: string
    _count: AgentCountAggregateOutputType | null
    _min: AgentMinAggregateOutputType | null
    _max: AgentMaxAggregateOutputType | null
  }

  type GetAgentGroupByPayload<T extends AgentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentGroupByOutputType[P]>
            : GetScalarType<T[P], AgentGroupByOutputType[P]>
        }
      >
    >


  export type AgentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Agent?: boolean
    Nom?: boolean
    Prenom?: boolean
    Email?: boolean
    Role?: boolean
    Password?: boolean
    Documents?: boolean | Agent$DocumentsArgs<ExtArgs>
    Historiques?: boolean | Agent$HistoriquesArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Agent?: boolean
    Nom?: boolean
    Prenom?: boolean
    Email?: boolean
    Role?: boolean
    Password?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Agent?: boolean
    Nom?: boolean
    Prenom?: boolean
    Email?: boolean
    Role?: boolean
    Password?: boolean
  }, ExtArgs["result"]["agent"]>

  export type AgentSelectScalar = {
    ID_Agent?: boolean
    Nom?: boolean
    Prenom?: boolean
    Email?: boolean
    Role?: boolean
    Password?: boolean
  }

  export type AgentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Agent" | "Nom" | "Prenom" | "Email" | "Role" | "Password", ExtArgs["result"]["agent"]>
  export type AgentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Documents?: boolean | Agent$DocumentsArgs<ExtArgs>
    Historiques?: boolean | Agent$HistoriquesArgs<ExtArgs>
    _count?: boolean | AgentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AgentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AgentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AgentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Agent"
    objects: {
      Documents: Prisma.$Document_ActePayload<ExtArgs>[]
      Historiques: Prisma.$Historique_ModificationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Agent: string
      Nom: string
      Prenom: string
      Email: string
      Role: $Enums.RoleAgent
      Password: string
    }, ExtArgs["result"]["agent"]>
    composites: {}
  }

  type AgentGetPayload<S extends boolean | null | undefined | AgentDefaultArgs> = $Result.GetResult<Prisma.$AgentPayload, S>

  type AgentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentCountAggregateInputType | true
    }

  export interface AgentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Agent'], meta: { name: 'Agent' } }
    /**
     * Find zero or one Agent that matches the filter.
     * @param {AgentFindUniqueArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentFindUniqueArgs>(args: SelectSubset<T, AgentFindUniqueArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Agent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentFindUniqueOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentFindFirstArgs>(args?: SelectSubset<T, AgentFindFirstArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Agent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindFirstOrThrowArgs} args - Arguments to find a Agent
     * @example
     * // Get one Agent
     * const agent = await prisma.agent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Agents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agents
     * const agents = await prisma.agent.findMany()
     * 
     * // Get first 10 Agents
     * const agents = await prisma.agent.findMany({ take: 10 })
     * 
     * // Only select the `ID_Agent`
     * const agentWithID_AgentOnly = await prisma.agent.findMany({ select: { ID_Agent: true } })
     * 
     */
    findMany<T extends AgentFindManyArgs>(args?: SelectSubset<T, AgentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Agent.
     * @param {AgentCreateArgs} args - Arguments to create a Agent.
     * @example
     * // Create one Agent
     * const Agent = await prisma.agent.create({
     *   data: {
     *     // ... data to create a Agent
     *   }
     * })
     * 
     */
    create<T extends AgentCreateArgs>(args: SelectSubset<T, AgentCreateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Agents.
     * @param {AgentCreateManyArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentCreateManyArgs>(args?: SelectSubset<T, AgentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agents and returns the data saved in the database.
     * @param {AgentCreateManyAndReturnArgs} args - Arguments to create many Agents.
     * @example
     * // Create many Agents
     * const agent = await prisma.agent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agents and only return the `ID_Agent`
     * const agentWithID_AgentOnly = await prisma.agent.createManyAndReturn({
     *   select: { ID_Agent: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Agent.
     * @param {AgentDeleteArgs} args - Arguments to delete one Agent.
     * @example
     * // Delete one Agent
     * const Agent = await prisma.agent.delete({
     *   where: {
     *     // ... filter to delete one Agent
     *   }
     * })
     * 
     */
    delete<T extends AgentDeleteArgs>(args: SelectSubset<T, AgentDeleteArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Agent.
     * @param {AgentUpdateArgs} args - Arguments to update one Agent.
     * @example
     * // Update one Agent
     * const agent = await prisma.agent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentUpdateArgs>(args: SelectSubset<T, AgentUpdateArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Agents.
     * @param {AgentDeleteManyArgs} args - Arguments to filter Agents to delete.
     * @example
     * // Delete a few Agents
     * const { count } = await prisma.agent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentDeleteManyArgs>(args?: SelectSubset<T, AgentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentUpdateManyArgs>(args: SelectSubset<T, AgentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agents and returns the data updated in the database.
     * @param {AgentUpdateManyAndReturnArgs} args - Arguments to update many Agents.
     * @example
     * // Update many Agents
     * const agent = await prisma.agent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Agents and only return the `ID_Agent`
     * const agentWithID_AgentOnly = await prisma.agent.updateManyAndReturn({
     *   select: { ID_Agent: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Agent.
     * @param {AgentUpsertArgs} args - Arguments to update or create a Agent.
     * @example
     * // Update or create a Agent
     * const agent = await prisma.agent.upsert({
     *   create: {
     *     // ... data to create a Agent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agent we want to update
     *   }
     * })
     */
    upsert<T extends AgentUpsertArgs>(args: SelectSubset<T, AgentUpsertArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Agents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentCountArgs} args - Arguments to filter Agents to count.
     * @example
     * // Count the number of Agents
     * const count = await prisma.agent.count({
     *   where: {
     *     // ... the filter for the Agents we want to count
     *   }
     * })
    **/
    count<T extends AgentCountArgs>(
      args?: Subset<T, AgentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentAggregateArgs>(args: Subset<T, AgentAggregateArgs>): Prisma.PrismaPromise<GetAgentAggregateType<T>>

    /**
     * Group by Agent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentGroupByArgs['orderBy'] }
        : { orderBy?: AgentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Agent model
   */
  readonly fields: AgentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Agent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Documents<T extends Agent$DocumentsArgs<ExtArgs> = {}>(args?: Subset<T, Agent$DocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Historiques<T extends Agent$HistoriquesArgs<ExtArgs> = {}>(args?: Subset<T, Agent$HistoriquesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Agent model
   */
  interface AgentFieldRefs {
    readonly ID_Agent: FieldRef<"Agent", 'String'>
    readonly Nom: FieldRef<"Agent", 'String'>
    readonly Prenom: FieldRef<"Agent", 'String'>
    readonly Email: FieldRef<"Agent", 'String'>
    readonly Role: FieldRef<"Agent", 'RoleAgent'>
    readonly Password: FieldRef<"Agent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Agent findUnique
   */
  export type AgentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findUniqueOrThrow
   */
  export type AgentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent findFirst
   */
  export type AgentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findFirstOrThrow
   */
  export type AgentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agent to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Agents.
     */
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent findMany
   */
  export type AgentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter, which Agents to fetch.
     */
    where?: AgentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Agents to fetch.
     */
    orderBy?: AgentOrderByWithRelationInput | AgentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Agents.
     */
    cursor?: AgentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Agents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Agents.
     */
    skip?: number
    distinct?: AgentScalarFieldEnum | AgentScalarFieldEnum[]
  }

  /**
   * Agent create
   */
  export type AgentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to create a Agent.
     */
    data: XOR<AgentCreateInput, AgentUncheckedCreateInput>
  }

  /**
   * Agent createMany
   */
  export type AgentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent createManyAndReturn
   */
  export type AgentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to create many Agents.
     */
    data: AgentCreateManyInput | AgentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Agent update
   */
  export type AgentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The data needed to update a Agent.
     */
    data: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
    /**
     * Choose, which Agent to update.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent updateMany
   */
  export type AgentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent updateManyAndReturn
   */
  export type AgentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * The data used to update Agents.
     */
    data: XOR<AgentUpdateManyMutationInput, AgentUncheckedUpdateManyInput>
    /**
     * Filter which Agents to update
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to update.
     */
    limit?: number
  }

  /**
   * Agent upsert
   */
  export type AgentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * The filter to search for the Agent to update in case it exists.
     */
    where: AgentWhereUniqueInput
    /**
     * In case the Agent found by the `where` argument doesn't exist, create a new Agent with this data.
     */
    create: XOR<AgentCreateInput, AgentUncheckedCreateInput>
    /**
     * In case the Agent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentUpdateInput, AgentUncheckedUpdateInput>
  }

  /**
   * Agent delete
   */
  export type AgentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
    /**
     * Filter which Agent to delete.
     */
    where: AgentWhereUniqueInput
  }

  /**
   * Agent deleteMany
   */
  export type AgentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Agents to delete
     */
    where?: AgentWhereInput
    /**
     * Limit how many Agents to delete.
     */
    limit?: number
  }

  /**
   * Agent.Documents
   */
  export type Agent$DocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    where?: Document_ActeWhereInput
    orderBy?: Document_ActeOrderByWithRelationInput | Document_ActeOrderByWithRelationInput[]
    cursor?: Document_ActeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_ActeScalarFieldEnum | Document_ActeScalarFieldEnum[]
  }

  /**
   * Agent.Historiques
   */
  export type Agent$HistoriquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    where?: Historique_ModificationsWhereInput
    orderBy?: Historique_ModificationsOrderByWithRelationInput | Historique_ModificationsOrderByWithRelationInput[]
    cursor?: Historique_ModificationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Historique_ModificationsScalarFieldEnum | Historique_ModificationsScalarFieldEnum[]
  }

  /**
   * Agent without action
   */
  export type AgentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Agent
     */
    select?: AgentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Agent
     */
    omit?: AgentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentInclude<ExtArgs> | null
  }


  /**
   * Model Historique_Modifications
   */

  export type AggregateHistorique_Modifications = {
    _count: Historique_ModificationsCountAggregateOutputType | null
    _min: Historique_ModificationsMinAggregateOutputType | null
    _max: Historique_ModificationsMaxAggregateOutputType | null
  }

  export type Historique_ModificationsMinAggregateOutputType = {
    ID_Historique: string | null
    TypeEntite: $Enums.TypeEntite | null
    ID_Entite: string | null
    ID_Agent: string | null
    Action: string | null
    DateModification: Date | null
    Ancienne_Valeur: string | null
    Nouvelle_Valeur: string | null
  }

  export type Historique_ModificationsMaxAggregateOutputType = {
    ID_Historique: string | null
    TypeEntite: $Enums.TypeEntite | null
    ID_Entite: string | null
    ID_Agent: string | null
    Action: string | null
    DateModification: Date | null
    Ancienne_Valeur: string | null
    Nouvelle_Valeur: string | null
  }

  export type Historique_ModificationsCountAggregateOutputType = {
    ID_Historique: number
    TypeEntite: number
    ID_Entite: number
    ID_Agent: number
    Action: number
    DateModification: number
    Ancienne_Valeur: number
    Nouvelle_Valeur: number
    _all: number
  }


  export type Historique_ModificationsMinAggregateInputType = {
    ID_Historique?: true
    TypeEntite?: true
    ID_Entite?: true
    ID_Agent?: true
    Action?: true
    DateModification?: true
    Ancienne_Valeur?: true
    Nouvelle_Valeur?: true
  }

  export type Historique_ModificationsMaxAggregateInputType = {
    ID_Historique?: true
    TypeEntite?: true
    ID_Entite?: true
    ID_Agent?: true
    Action?: true
    DateModification?: true
    Ancienne_Valeur?: true
    Nouvelle_Valeur?: true
  }

  export type Historique_ModificationsCountAggregateInputType = {
    ID_Historique?: true
    TypeEntite?: true
    ID_Entite?: true
    ID_Agent?: true
    Action?: true
    DateModification?: true
    Ancienne_Valeur?: true
    Nouvelle_Valeur?: true
    _all?: true
  }

  export type Historique_ModificationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historique_Modifications to aggregate.
     */
    where?: Historique_ModificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historique_Modifications to fetch.
     */
    orderBy?: Historique_ModificationsOrderByWithRelationInput | Historique_ModificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Historique_ModificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historique_Modifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historique_Modifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Historique_Modifications
    **/
    _count?: true | Historique_ModificationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Historique_ModificationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Historique_ModificationsMaxAggregateInputType
  }

  export type GetHistorique_ModificationsAggregateType<T extends Historique_ModificationsAggregateArgs> = {
        [P in keyof T & keyof AggregateHistorique_Modifications]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistorique_Modifications[P]>
      : GetScalarType<T[P], AggregateHistorique_Modifications[P]>
  }




  export type Historique_ModificationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Historique_ModificationsWhereInput
    orderBy?: Historique_ModificationsOrderByWithAggregationInput | Historique_ModificationsOrderByWithAggregationInput[]
    by: Historique_ModificationsScalarFieldEnum[] | Historique_ModificationsScalarFieldEnum
    having?: Historique_ModificationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Historique_ModificationsCountAggregateInputType | true
    _min?: Historique_ModificationsMinAggregateInputType
    _max?: Historique_ModificationsMaxAggregateInputType
  }

  export type Historique_ModificationsGroupByOutputType = {
    ID_Historique: string
    TypeEntite: $Enums.TypeEntite
    ID_Entite: string
    ID_Agent: string
    Action: string
    DateModification: Date
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
    _count: Historique_ModificationsCountAggregateOutputType | null
    _min: Historique_ModificationsMinAggregateOutputType | null
    _max: Historique_ModificationsMaxAggregateOutputType | null
  }

  type GetHistorique_ModificationsGroupByPayload<T extends Historique_ModificationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Historique_ModificationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Historique_ModificationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Historique_ModificationsGroupByOutputType[P]>
            : GetScalarType<T[P], Historique_ModificationsGroupByOutputType[P]>
        }
      >
    >


  export type Historique_ModificationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Historique?: boolean
    TypeEntite?: boolean
    ID_Entite?: boolean
    ID_Agent?: boolean
    Action?: boolean
    DateModification?: boolean
    Ancienne_Valeur?: boolean
    Nouvelle_Valeur?: boolean
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
    Demande?: boolean | Historique_Modifications$DemandeArgs<ExtArgs>
    Document?: boolean | Historique_Modifications$DocumentArgs<ExtArgs>
  }, ExtArgs["result"]["historique_Modifications"]>

  export type Historique_ModificationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Historique?: boolean
    TypeEntite?: boolean
    ID_Entite?: boolean
    ID_Agent?: boolean
    Action?: boolean
    DateModification?: boolean
    Ancienne_Valeur?: boolean
    Nouvelle_Valeur?: boolean
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
    Demande?: boolean | Historique_Modifications$DemandeArgs<ExtArgs>
    Document?: boolean | Historique_Modifications$DocumentArgs<ExtArgs>
  }, ExtArgs["result"]["historique_Modifications"]>

  export type Historique_ModificationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_Historique?: boolean
    TypeEntite?: boolean
    ID_Entite?: boolean
    ID_Agent?: boolean
    Action?: boolean
    DateModification?: boolean
    Ancienne_Valeur?: boolean
    Nouvelle_Valeur?: boolean
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
    Demande?: boolean | Historique_Modifications$DemandeArgs<ExtArgs>
    Document?: boolean | Historique_Modifications$DocumentArgs<ExtArgs>
  }, ExtArgs["result"]["historique_Modifications"]>

  export type Historique_ModificationsSelectScalar = {
    ID_Historique?: boolean
    TypeEntite?: boolean
    ID_Entite?: boolean
    ID_Agent?: boolean
    Action?: boolean
    DateModification?: boolean
    Ancienne_Valeur?: boolean
    Nouvelle_Valeur?: boolean
  }

  export type Historique_ModificationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_Historique" | "TypeEntite" | "ID_Entite" | "ID_Agent" | "Action" | "DateModification" | "Ancienne_Valeur" | "Nouvelle_Valeur", ExtArgs["result"]["historique_Modifications"]>
  export type Historique_ModificationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
    Demande?: boolean | Historique_Modifications$DemandeArgs<ExtArgs>
    Document?: boolean | Historique_Modifications$DocumentArgs<ExtArgs>
  }
  export type Historique_ModificationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
    Demande?: boolean | Historique_Modifications$DemandeArgs<ExtArgs>
    Document?: boolean | Historique_Modifications$DocumentArgs<ExtArgs>
  }
  export type Historique_ModificationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Agent?: boolean | AgentDefaultArgs<ExtArgs>
    Demande?: boolean | Historique_Modifications$DemandeArgs<ExtArgs>
    Document?: boolean | Historique_Modifications$DocumentArgs<ExtArgs>
  }

  export type $Historique_ModificationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Historique_Modifications"
    objects: {
      Agent: Prisma.$AgentPayload<ExtArgs>
      Demande: Prisma.$DemandePayload<ExtArgs> | null
      Document: Prisma.$Document_ActePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      ID_Historique: string
      TypeEntite: $Enums.TypeEntite
      ID_Entite: string
      ID_Agent: string
      Action: string
      DateModification: Date
      Ancienne_Valeur: string
      Nouvelle_Valeur: string
    }, ExtArgs["result"]["historique_Modifications"]>
    composites: {}
  }

  type Historique_ModificationsGetPayload<S extends boolean | null | undefined | Historique_ModificationsDefaultArgs> = $Result.GetResult<Prisma.$Historique_ModificationsPayload, S>

  type Historique_ModificationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Historique_ModificationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Historique_ModificationsCountAggregateInputType | true
    }

  export interface Historique_ModificationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Historique_Modifications'], meta: { name: 'Historique_Modifications' } }
    /**
     * Find zero or one Historique_Modifications that matches the filter.
     * @param {Historique_ModificationsFindUniqueArgs} args - Arguments to find a Historique_Modifications
     * @example
     * // Get one Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Historique_ModificationsFindUniqueArgs>(args: SelectSubset<T, Historique_ModificationsFindUniqueArgs<ExtArgs>>): Prisma__Historique_ModificationsClient<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Historique_Modifications that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Historique_ModificationsFindUniqueOrThrowArgs} args - Arguments to find a Historique_Modifications
     * @example
     * // Get one Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Historique_ModificationsFindUniqueOrThrowArgs>(args: SelectSubset<T, Historique_ModificationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Historique_ModificationsClient<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historique_Modifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historique_ModificationsFindFirstArgs} args - Arguments to find a Historique_Modifications
     * @example
     * // Get one Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Historique_ModificationsFindFirstArgs>(args?: SelectSubset<T, Historique_ModificationsFindFirstArgs<ExtArgs>>): Prisma__Historique_ModificationsClient<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Historique_Modifications that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historique_ModificationsFindFirstOrThrowArgs} args - Arguments to find a Historique_Modifications
     * @example
     * // Get one Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Historique_ModificationsFindFirstOrThrowArgs>(args?: SelectSubset<T, Historique_ModificationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Historique_ModificationsClient<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Historique_Modifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historique_ModificationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.findMany()
     * 
     * // Get first 10 Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.findMany({ take: 10 })
     * 
     * // Only select the `ID_Historique`
     * const historique_ModificationsWithID_HistoriqueOnly = await prisma.historique_Modifications.findMany({ select: { ID_Historique: true } })
     * 
     */
    findMany<T extends Historique_ModificationsFindManyArgs>(args?: SelectSubset<T, Historique_ModificationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Historique_Modifications.
     * @param {Historique_ModificationsCreateArgs} args - Arguments to create a Historique_Modifications.
     * @example
     * // Create one Historique_Modifications
     * const Historique_Modifications = await prisma.historique_Modifications.create({
     *   data: {
     *     // ... data to create a Historique_Modifications
     *   }
     * })
     * 
     */
    create<T extends Historique_ModificationsCreateArgs>(args: SelectSubset<T, Historique_ModificationsCreateArgs<ExtArgs>>): Prisma__Historique_ModificationsClient<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Historique_Modifications.
     * @param {Historique_ModificationsCreateManyArgs} args - Arguments to create many Historique_Modifications.
     * @example
     * // Create many Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Historique_ModificationsCreateManyArgs>(args?: SelectSubset<T, Historique_ModificationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Historique_Modifications and returns the data saved in the database.
     * @param {Historique_ModificationsCreateManyAndReturnArgs} args - Arguments to create many Historique_Modifications.
     * @example
     * // Create many Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Historique_Modifications and only return the `ID_Historique`
     * const historique_ModificationsWithID_HistoriqueOnly = await prisma.historique_Modifications.createManyAndReturn({
     *   select: { ID_Historique: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Historique_ModificationsCreateManyAndReturnArgs>(args?: SelectSubset<T, Historique_ModificationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Historique_Modifications.
     * @param {Historique_ModificationsDeleteArgs} args - Arguments to delete one Historique_Modifications.
     * @example
     * // Delete one Historique_Modifications
     * const Historique_Modifications = await prisma.historique_Modifications.delete({
     *   where: {
     *     // ... filter to delete one Historique_Modifications
     *   }
     * })
     * 
     */
    delete<T extends Historique_ModificationsDeleteArgs>(args: SelectSubset<T, Historique_ModificationsDeleteArgs<ExtArgs>>): Prisma__Historique_ModificationsClient<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Historique_Modifications.
     * @param {Historique_ModificationsUpdateArgs} args - Arguments to update one Historique_Modifications.
     * @example
     * // Update one Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Historique_ModificationsUpdateArgs>(args: SelectSubset<T, Historique_ModificationsUpdateArgs<ExtArgs>>): Prisma__Historique_ModificationsClient<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Historique_Modifications.
     * @param {Historique_ModificationsDeleteManyArgs} args - Arguments to filter Historique_Modifications to delete.
     * @example
     * // Delete a few Historique_Modifications
     * const { count } = await prisma.historique_Modifications.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Historique_ModificationsDeleteManyArgs>(args?: SelectSubset<T, Historique_ModificationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historique_Modifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historique_ModificationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Historique_ModificationsUpdateManyArgs>(args: SelectSubset<T, Historique_ModificationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Historique_Modifications and returns the data updated in the database.
     * @param {Historique_ModificationsUpdateManyAndReturnArgs} args - Arguments to update many Historique_Modifications.
     * @example
     * // Update many Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Historique_Modifications and only return the `ID_Historique`
     * const historique_ModificationsWithID_HistoriqueOnly = await prisma.historique_Modifications.updateManyAndReturn({
     *   select: { ID_Historique: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Historique_ModificationsUpdateManyAndReturnArgs>(args: SelectSubset<T, Historique_ModificationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Historique_Modifications.
     * @param {Historique_ModificationsUpsertArgs} args - Arguments to update or create a Historique_Modifications.
     * @example
     * // Update or create a Historique_Modifications
     * const historique_Modifications = await prisma.historique_Modifications.upsert({
     *   create: {
     *     // ... data to create a Historique_Modifications
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Historique_Modifications we want to update
     *   }
     * })
     */
    upsert<T extends Historique_ModificationsUpsertArgs>(args: SelectSubset<T, Historique_ModificationsUpsertArgs<ExtArgs>>): Prisma__Historique_ModificationsClient<$Result.GetResult<Prisma.$Historique_ModificationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Historique_Modifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historique_ModificationsCountArgs} args - Arguments to filter Historique_Modifications to count.
     * @example
     * // Count the number of Historique_Modifications
     * const count = await prisma.historique_Modifications.count({
     *   where: {
     *     // ... the filter for the Historique_Modifications we want to count
     *   }
     * })
    **/
    count<T extends Historique_ModificationsCountArgs>(
      args?: Subset<T, Historique_ModificationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Historique_ModificationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Historique_Modifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historique_ModificationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Historique_ModificationsAggregateArgs>(args: Subset<T, Historique_ModificationsAggregateArgs>): Prisma.PrismaPromise<GetHistorique_ModificationsAggregateType<T>>

    /**
     * Group by Historique_Modifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Historique_ModificationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Historique_ModificationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Historique_ModificationsGroupByArgs['orderBy'] }
        : { orderBy?: Historique_ModificationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Historique_ModificationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistorique_ModificationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Historique_Modifications model
   */
  readonly fields: Historique_ModificationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Historique_Modifications.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Historique_ModificationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Agent<T extends AgentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentDefaultArgs<ExtArgs>>): Prisma__AgentClient<$Result.GetResult<Prisma.$AgentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Demande<T extends Historique_Modifications$DemandeArgs<ExtArgs> = {}>(args?: Subset<T, Historique_Modifications$DemandeArgs<ExtArgs>>): Prisma__DemandeClient<$Result.GetResult<Prisma.$DemandePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Document<T extends Historique_Modifications$DocumentArgs<ExtArgs> = {}>(args?: Subset<T, Historique_Modifications$DocumentArgs<ExtArgs>>): Prisma__Document_ActeClient<$Result.GetResult<Prisma.$Document_ActePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Historique_Modifications model
   */
  interface Historique_ModificationsFieldRefs {
    readonly ID_Historique: FieldRef<"Historique_Modifications", 'String'>
    readonly TypeEntite: FieldRef<"Historique_Modifications", 'TypeEntite'>
    readonly ID_Entite: FieldRef<"Historique_Modifications", 'String'>
    readonly ID_Agent: FieldRef<"Historique_Modifications", 'String'>
    readonly Action: FieldRef<"Historique_Modifications", 'String'>
    readonly DateModification: FieldRef<"Historique_Modifications", 'DateTime'>
    readonly Ancienne_Valeur: FieldRef<"Historique_Modifications", 'String'>
    readonly Nouvelle_Valeur: FieldRef<"Historique_Modifications", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Historique_Modifications findUnique
   */
  export type Historique_ModificationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    /**
     * Filter, which Historique_Modifications to fetch.
     */
    where: Historique_ModificationsWhereUniqueInput
  }

  /**
   * Historique_Modifications findUniqueOrThrow
   */
  export type Historique_ModificationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    /**
     * Filter, which Historique_Modifications to fetch.
     */
    where: Historique_ModificationsWhereUniqueInput
  }

  /**
   * Historique_Modifications findFirst
   */
  export type Historique_ModificationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    /**
     * Filter, which Historique_Modifications to fetch.
     */
    where?: Historique_ModificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historique_Modifications to fetch.
     */
    orderBy?: Historique_ModificationsOrderByWithRelationInput | Historique_ModificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historique_Modifications.
     */
    cursor?: Historique_ModificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historique_Modifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historique_Modifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historique_Modifications.
     */
    distinct?: Historique_ModificationsScalarFieldEnum | Historique_ModificationsScalarFieldEnum[]
  }

  /**
   * Historique_Modifications findFirstOrThrow
   */
  export type Historique_ModificationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    /**
     * Filter, which Historique_Modifications to fetch.
     */
    where?: Historique_ModificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historique_Modifications to fetch.
     */
    orderBy?: Historique_ModificationsOrderByWithRelationInput | Historique_ModificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Historique_Modifications.
     */
    cursor?: Historique_ModificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historique_Modifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historique_Modifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Historique_Modifications.
     */
    distinct?: Historique_ModificationsScalarFieldEnum | Historique_ModificationsScalarFieldEnum[]
  }

  /**
   * Historique_Modifications findMany
   */
  export type Historique_ModificationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    /**
     * Filter, which Historique_Modifications to fetch.
     */
    where?: Historique_ModificationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Historique_Modifications to fetch.
     */
    orderBy?: Historique_ModificationsOrderByWithRelationInput | Historique_ModificationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Historique_Modifications.
     */
    cursor?: Historique_ModificationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Historique_Modifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Historique_Modifications.
     */
    skip?: number
    distinct?: Historique_ModificationsScalarFieldEnum | Historique_ModificationsScalarFieldEnum[]
  }

  /**
   * Historique_Modifications create
   */
  export type Historique_ModificationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Historique_Modifications.
     */
    data: XOR<Historique_ModificationsCreateInput, Historique_ModificationsUncheckedCreateInput>
  }

  /**
   * Historique_Modifications createMany
   */
  export type Historique_ModificationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Historique_Modifications.
     */
    data: Historique_ModificationsCreateManyInput | Historique_ModificationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Historique_Modifications createManyAndReturn
   */
  export type Historique_ModificationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * The data used to create many Historique_Modifications.
     */
    data: Historique_ModificationsCreateManyInput | Historique_ModificationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historique_Modifications update
   */
  export type Historique_ModificationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Historique_Modifications.
     */
    data: XOR<Historique_ModificationsUpdateInput, Historique_ModificationsUncheckedUpdateInput>
    /**
     * Choose, which Historique_Modifications to update.
     */
    where: Historique_ModificationsWhereUniqueInput
  }

  /**
   * Historique_Modifications updateMany
   */
  export type Historique_ModificationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Historique_Modifications.
     */
    data: XOR<Historique_ModificationsUpdateManyMutationInput, Historique_ModificationsUncheckedUpdateManyInput>
    /**
     * Filter which Historique_Modifications to update
     */
    where?: Historique_ModificationsWhereInput
    /**
     * Limit how many Historique_Modifications to update.
     */
    limit?: number
  }

  /**
   * Historique_Modifications updateManyAndReturn
   */
  export type Historique_ModificationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * The data used to update Historique_Modifications.
     */
    data: XOR<Historique_ModificationsUpdateManyMutationInput, Historique_ModificationsUncheckedUpdateManyInput>
    /**
     * Filter which Historique_Modifications to update
     */
    where?: Historique_ModificationsWhereInput
    /**
     * Limit how many Historique_Modifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Historique_Modifications upsert
   */
  export type Historique_ModificationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Historique_Modifications to update in case it exists.
     */
    where: Historique_ModificationsWhereUniqueInput
    /**
     * In case the Historique_Modifications found by the `where` argument doesn't exist, create a new Historique_Modifications with this data.
     */
    create: XOR<Historique_ModificationsCreateInput, Historique_ModificationsUncheckedCreateInput>
    /**
     * In case the Historique_Modifications was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Historique_ModificationsUpdateInput, Historique_ModificationsUncheckedUpdateInput>
  }

  /**
   * Historique_Modifications delete
   */
  export type Historique_ModificationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
    /**
     * Filter which Historique_Modifications to delete.
     */
    where: Historique_ModificationsWhereUniqueInput
  }

  /**
   * Historique_Modifications deleteMany
   */
  export type Historique_ModificationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Historique_Modifications to delete
     */
    where?: Historique_ModificationsWhereInput
    /**
     * Limit how many Historique_Modifications to delete.
     */
    limit?: number
  }

  /**
   * Historique_Modifications.Demande
   */
  export type Historique_Modifications$DemandeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Demande
     */
    select?: DemandeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Demande
     */
    omit?: DemandeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DemandeInclude<ExtArgs> | null
    where?: DemandeWhereInput
  }

  /**
   * Historique_Modifications.Document
   */
  export type Historique_Modifications$DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document_Acte
     */
    select?: Document_ActeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document_Acte
     */
    omit?: Document_ActeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Document_ActeInclude<ExtArgs> | null
    where?: Document_ActeWhereInput
  }

  /**
   * Historique_Modifications without action
   */
  export type Historique_ModificationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Historique_Modifications
     */
    select?: Historique_ModificationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Historique_Modifications
     */
    omit?: Historique_ModificationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Historique_ModificationsInclude<ExtArgs> | null
  }


  /**
   * Model FraisTimbre
   */

  export type AggregateFraisTimbre = {
    _count: FraisTimbreCountAggregateOutputType | null
    _avg: FraisTimbreAvgAggregateOutputType | null
    _sum: FraisTimbreSumAggregateOutputType | null
    _min: FraisTimbreMinAggregateOutputType | null
    _max: FraisTimbreMaxAggregateOutputType | null
  }

  export type FraisTimbreAvgAggregateOutputType = {
    ID_FraisTimbre: number | null
    PrixTimbre: number | null
    FraisDossier: number | null
  }

  export type FraisTimbreSumAggregateOutputType = {
    ID_FraisTimbre: number | null
    PrixTimbre: number | null
    FraisDossier: number | null
  }

  export type FraisTimbreMinAggregateOutputType = {
    ID_FraisTimbre: number | null
    TypeActe: $Enums.TypeActe | null
    PrixTimbre: number | null
    FraisDossier: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type FraisTimbreMaxAggregateOutputType = {
    ID_FraisTimbre: number | null
    TypeActe: $Enums.TypeActe | null
    PrixTimbre: number | null
    FraisDossier: number | null
    CreatedAt: Date | null
    UpdatedAt: Date | null
  }

  export type FraisTimbreCountAggregateOutputType = {
    ID_FraisTimbre: number
    TypeActe: number
    PrixTimbre: number
    FraisDossier: number
    CreatedAt: number
    UpdatedAt: number
    _all: number
  }


  export type FraisTimbreAvgAggregateInputType = {
    ID_FraisTimbre?: true
    PrixTimbre?: true
    FraisDossier?: true
  }

  export type FraisTimbreSumAggregateInputType = {
    ID_FraisTimbre?: true
    PrixTimbre?: true
    FraisDossier?: true
  }

  export type FraisTimbreMinAggregateInputType = {
    ID_FraisTimbre?: true
    TypeActe?: true
    PrixTimbre?: true
    FraisDossier?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type FraisTimbreMaxAggregateInputType = {
    ID_FraisTimbre?: true
    TypeActe?: true
    PrixTimbre?: true
    FraisDossier?: true
    CreatedAt?: true
    UpdatedAt?: true
  }

  export type FraisTimbreCountAggregateInputType = {
    ID_FraisTimbre?: true
    TypeActe?: true
    PrixTimbre?: true
    FraisDossier?: true
    CreatedAt?: true
    UpdatedAt?: true
    _all?: true
  }

  export type FraisTimbreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FraisTimbre to aggregate.
     */
    where?: FraisTimbreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FraisTimbres to fetch.
     */
    orderBy?: FraisTimbreOrderByWithRelationInput | FraisTimbreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FraisTimbreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FraisTimbres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FraisTimbres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FraisTimbres
    **/
    _count?: true | FraisTimbreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FraisTimbreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FraisTimbreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FraisTimbreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FraisTimbreMaxAggregateInputType
  }

  export type GetFraisTimbreAggregateType<T extends FraisTimbreAggregateArgs> = {
        [P in keyof T & keyof AggregateFraisTimbre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFraisTimbre[P]>
      : GetScalarType<T[P], AggregateFraisTimbre[P]>
  }




  export type FraisTimbreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FraisTimbreWhereInput
    orderBy?: FraisTimbreOrderByWithAggregationInput | FraisTimbreOrderByWithAggregationInput[]
    by: FraisTimbreScalarFieldEnum[] | FraisTimbreScalarFieldEnum
    having?: FraisTimbreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FraisTimbreCountAggregateInputType | true
    _avg?: FraisTimbreAvgAggregateInputType
    _sum?: FraisTimbreSumAggregateInputType
    _min?: FraisTimbreMinAggregateInputType
    _max?: FraisTimbreMaxAggregateInputType
  }

  export type FraisTimbreGroupByOutputType = {
    ID_FraisTimbre: number
    TypeActe: $Enums.TypeActe
    PrixTimbre: number
    FraisDossier: number | null
    CreatedAt: Date
    UpdatedAt: Date
    _count: FraisTimbreCountAggregateOutputType | null
    _avg: FraisTimbreAvgAggregateOutputType | null
    _sum: FraisTimbreSumAggregateOutputType | null
    _min: FraisTimbreMinAggregateOutputType | null
    _max: FraisTimbreMaxAggregateOutputType | null
  }

  type GetFraisTimbreGroupByPayload<T extends FraisTimbreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FraisTimbreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FraisTimbreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FraisTimbreGroupByOutputType[P]>
            : GetScalarType<T[P], FraisTimbreGroupByOutputType[P]>
        }
      >
    >


  export type FraisTimbreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_FraisTimbre?: boolean
    TypeActe?: boolean
    PrixTimbre?: boolean
    FraisDossier?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["fraisTimbre"]>

  export type FraisTimbreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_FraisTimbre?: boolean
    TypeActe?: boolean
    PrixTimbre?: boolean
    FraisDossier?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["fraisTimbre"]>

  export type FraisTimbreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID_FraisTimbre?: boolean
    TypeActe?: boolean
    PrixTimbre?: boolean
    FraisDossier?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }, ExtArgs["result"]["fraisTimbre"]>

  export type FraisTimbreSelectScalar = {
    ID_FraisTimbre?: boolean
    TypeActe?: boolean
    PrixTimbre?: boolean
    FraisDossier?: boolean
    CreatedAt?: boolean
    UpdatedAt?: boolean
  }

  export type FraisTimbreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID_FraisTimbre" | "TypeActe" | "PrixTimbre" | "FraisDossier" | "CreatedAt" | "UpdatedAt", ExtArgs["result"]["fraisTimbre"]>

  export type $FraisTimbrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FraisTimbre"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      ID_FraisTimbre: number
      TypeActe: $Enums.TypeActe
      PrixTimbre: number
      FraisDossier: number | null
      CreatedAt: Date
      UpdatedAt: Date
    }, ExtArgs["result"]["fraisTimbre"]>
    composites: {}
  }

  type FraisTimbreGetPayload<S extends boolean | null | undefined | FraisTimbreDefaultArgs> = $Result.GetResult<Prisma.$FraisTimbrePayload, S>

  type FraisTimbreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FraisTimbreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FraisTimbreCountAggregateInputType | true
    }

  export interface FraisTimbreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FraisTimbre'], meta: { name: 'FraisTimbre' } }
    /**
     * Find zero or one FraisTimbre that matches the filter.
     * @param {FraisTimbreFindUniqueArgs} args - Arguments to find a FraisTimbre
     * @example
     * // Get one FraisTimbre
     * const fraisTimbre = await prisma.fraisTimbre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FraisTimbreFindUniqueArgs>(args: SelectSubset<T, FraisTimbreFindUniqueArgs<ExtArgs>>): Prisma__FraisTimbreClient<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FraisTimbre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FraisTimbreFindUniqueOrThrowArgs} args - Arguments to find a FraisTimbre
     * @example
     * // Get one FraisTimbre
     * const fraisTimbre = await prisma.fraisTimbre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FraisTimbreFindUniqueOrThrowArgs>(args: SelectSubset<T, FraisTimbreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FraisTimbreClient<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FraisTimbre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraisTimbreFindFirstArgs} args - Arguments to find a FraisTimbre
     * @example
     * // Get one FraisTimbre
     * const fraisTimbre = await prisma.fraisTimbre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FraisTimbreFindFirstArgs>(args?: SelectSubset<T, FraisTimbreFindFirstArgs<ExtArgs>>): Prisma__FraisTimbreClient<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FraisTimbre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraisTimbreFindFirstOrThrowArgs} args - Arguments to find a FraisTimbre
     * @example
     * // Get one FraisTimbre
     * const fraisTimbre = await prisma.fraisTimbre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FraisTimbreFindFirstOrThrowArgs>(args?: SelectSubset<T, FraisTimbreFindFirstOrThrowArgs<ExtArgs>>): Prisma__FraisTimbreClient<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FraisTimbres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraisTimbreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FraisTimbres
     * const fraisTimbres = await prisma.fraisTimbre.findMany()
     * 
     * // Get first 10 FraisTimbres
     * const fraisTimbres = await prisma.fraisTimbre.findMany({ take: 10 })
     * 
     * // Only select the `ID_FraisTimbre`
     * const fraisTimbreWithID_FraisTimbreOnly = await prisma.fraisTimbre.findMany({ select: { ID_FraisTimbre: true } })
     * 
     */
    findMany<T extends FraisTimbreFindManyArgs>(args?: SelectSubset<T, FraisTimbreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FraisTimbre.
     * @param {FraisTimbreCreateArgs} args - Arguments to create a FraisTimbre.
     * @example
     * // Create one FraisTimbre
     * const FraisTimbre = await prisma.fraisTimbre.create({
     *   data: {
     *     // ... data to create a FraisTimbre
     *   }
     * })
     * 
     */
    create<T extends FraisTimbreCreateArgs>(args: SelectSubset<T, FraisTimbreCreateArgs<ExtArgs>>): Prisma__FraisTimbreClient<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FraisTimbres.
     * @param {FraisTimbreCreateManyArgs} args - Arguments to create many FraisTimbres.
     * @example
     * // Create many FraisTimbres
     * const fraisTimbre = await prisma.fraisTimbre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FraisTimbreCreateManyArgs>(args?: SelectSubset<T, FraisTimbreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FraisTimbres and returns the data saved in the database.
     * @param {FraisTimbreCreateManyAndReturnArgs} args - Arguments to create many FraisTimbres.
     * @example
     * // Create many FraisTimbres
     * const fraisTimbre = await prisma.fraisTimbre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FraisTimbres and only return the `ID_FraisTimbre`
     * const fraisTimbreWithID_FraisTimbreOnly = await prisma.fraisTimbre.createManyAndReturn({
     *   select: { ID_FraisTimbre: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FraisTimbreCreateManyAndReturnArgs>(args?: SelectSubset<T, FraisTimbreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FraisTimbre.
     * @param {FraisTimbreDeleteArgs} args - Arguments to delete one FraisTimbre.
     * @example
     * // Delete one FraisTimbre
     * const FraisTimbre = await prisma.fraisTimbre.delete({
     *   where: {
     *     // ... filter to delete one FraisTimbre
     *   }
     * })
     * 
     */
    delete<T extends FraisTimbreDeleteArgs>(args: SelectSubset<T, FraisTimbreDeleteArgs<ExtArgs>>): Prisma__FraisTimbreClient<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FraisTimbre.
     * @param {FraisTimbreUpdateArgs} args - Arguments to update one FraisTimbre.
     * @example
     * // Update one FraisTimbre
     * const fraisTimbre = await prisma.fraisTimbre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FraisTimbreUpdateArgs>(args: SelectSubset<T, FraisTimbreUpdateArgs<ExtArgs>>): Prisma__FraisTimbreClient<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FraisTimbres.
     * @param {FraisTimbreDeleteManyArgs} args - Arguments to filter FraisTimbres to delete.
     * @example
     * // Delete a few FraisTimbres
     * const { count } = await prisma.fraisTimbre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FraisTimbreDeleteManyArgs>(args?: SelectSubset<T, FraisTimbreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FraisTimbres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraisTimbreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FraisTimbres
     * const fraisTimbre = await prisma.fraisTimbre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FraisTimbreUpdateManyArgs>(args: SelectSubset<T, FraisTimbreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FraisTimbres and returns the data updated in the database.
     * @param {FraisTimbreUpdateManyAndReturnArgs} args - Arguments to update many FraisTimbres.
     * @example
     * // Update many FraisTimbres
     * const fraisTimbre = await prisma.fraisTimbre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FraisTimbres and only return the `ID_FraisTimbre`
     * const fraisTimbreWithID_FraisTimbreOnly = await prisma.fraisTimbre.updateManyAndReturn({
     *   select: { ID_FraisTimbre: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FraisTimbreUpdateManyAndReturnArgs>(args: SelectSubset<T, FraisTimbreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FraisTimbre.
     * @param {FraisTimbreUpsertArgs} args - Arguments to update or create a FraisTimbre.
     * @example
     * // Update or create a FraisTimbre
     * const fraisTimbre = await prisma.fraisTimbre.upsert({
     *   create: {
     *     // ... data to create a FraisTimbre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FraisTimbre we want to update
     *   }
     * })
     */
    upsert<T extends FraisTimbreUpsertArgs>(args: SelectSubset<T, FraisTimbreUpsertArgs<ExtArgs>>): Prisma__FraisTimbreClient<$Result.GetResult<Prisma.$FraisTimbrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FraisTimbres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraisTimbreCountArgs} args - Arguments to filter FraisTimbres to count.
     * @example
     * // Count the number of FraisTimbres
     * const count = await prisma.fraisTimbre.count({
     *   where: {
     *     // ... the filter for the FraisTimbres we want to count
     *   }
     * })
    **/
    count<T extends FraisTimbreCountArgs>(
      args?: Subset<T, FraisTimbreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FraisTimbreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FraisTimbre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraisTimbreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FraisTimbreAggregateArgs>(args: Subset<T, FraisTimbreAggregateArgs>): Prisma.PrismaPromise<GetFraisTimbreAggregateType<T>>

    /**
     * Group by FraisTimbre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FraisTimbreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FraisTimbreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FraisTimbreGroupByArgs['orderBy'] }
        : { orderBy?: FraisTimbreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FraisTimbreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFraisTimbreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FraisTimbre model
   */
  readonly fields: FraisTimbreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FraisTimbre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FraisTimbreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FraisTimbre model
   */
  interface FraisTimbreFieldRefs {
    readonly ID_FraisTimbre: FieldRef<"FraisTimbre", 'Int'>
    readonly TypeActe: FieldRef<"FraisTimbre", 'TypeActe'>
    readonly PrixTimbre: FieldRef<"FraisTimbre", 'Float'>
    readonly FraisDossier: FieldRef<"FraisTimbre", 'Float'>
    readonly CreatedAt: FieldRef<"FraisTimbre", 'DateTime'>
    readonly UpdatedAt: FieldRef<"FraisTimbre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FraisTimbre findUnique
   */
  export type FraisTimbreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * Filter, which FraisTimbre to fetch.
     */
    where: FraisTimbreWhereUniqueInput
  }

  /**
   * FraisTimbre findUniqueOrThrow
   */
  export type FraisTimbreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * Filter, which FraisTimbre to fetch.
     */
    where: FraisTimbreWhereUniqueInput
  }

  /**
   * FraisTimbre findFirst
   */
  export type FraisTimbreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * Filter, which FraisTimbre to fetch.
     */
    where?: FraisTimbreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FraisTimbres to fetch.
     */
    orderBy?: FraisTimbreOrderByWithRelationInput | FraisTimbreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FraisTimbres.
     */
    cursor?: FraisTimbreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FraisTimbres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FraisTimbres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FraisTimbres.
     */
    distinct?: FraisTimbreScalarFieldEnum | FraisTimbreScalarFieldEnum[]
  }

  /**
   * FraisTimbre findFirstOrThrow
   */
  export type FraisTimbreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * Filter, which FraisTimbre to fetch.
     */
    where?: FraisTimbreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FraisTimbres to fetch.
     */
    orderBy?: FraisTimbreOrderByWithRelationInput | FraisTimbreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FraisTimbres.
     */
    cursor?: FraisTimbreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FraisTimbres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FraisTimbres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FraisTimbres.
     */
    distinct?: FraisTimbreScalarFieldEnum | FraisTimbreScalarFieldEnum[]
  }

  /**
   * FraisTimbre findMany
   */
  export type FraisTimbreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * Filter, which FraisTimbres to fetch.
     */
    where?: FraisTimbreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FraisTimbres to fetch.
     */
    orderBy?: FraisTimbreOrderByWithRelationInput | FraisTimbreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FraisTimbres.
     */
    cursor?: FraisTimbreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FraisTimbres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FraisTimbres.
     */
    skip?: number
    distinct?: FraisTimbreScalarFieldEnum | FraisTimbreScalarFieldEnum[]
  }

  /**
   * FraisTimbre create
   */
  export type FraisTimbreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * The data needed to create a FraisTimbre.
     */
    data: XOR<FraisTimbreCreateInput, FraisTimbreUncheckedCreateInput>
  }

  /**
   * FraisTimbre createMany
   */
  export type FraisTimbreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FraisTimbres.
     */
    data: FraisTimbreCreateManyInput | FraisTimbreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FraisTimbre createManyAndReturn
   */
  export type FraisTimbreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * The data used to create many FraisTimbres.
     */
    data: FraisTimbreCreateManyInput | FraisTimbreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FraisTimbre update
   */
  export type FraisTimbreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * The data needed to update a FraisTimbre.
     */
    data: XOR<FraisTimbreUpdateInput, FraisTimbreUncheckedUpdateInput>
    /**
     * Choose, which FraisTimbre to update.
     */
    where: FraisTimbreWhereUniqueInput
  }

  /**
   * FraisTimbre updateMany
   */
  export type FraisTimbreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FraisTimbres.
     */
    data: XOR<FraisTimbreUpdateManyMutationInput, FraisTimbreUncheckedUpdateManyInput>
    /**
     * Filter which FraisTimbres to update
     */
    where?: FraisTimbreWhereInput
    /**
     * Limit how many FraisTimbres to update.
     */
    limit?: number
  }

  /**
   * FraisTimbre updateManyAndReturn
   */
  export type FraisTimbreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * The data used to update FraisTimbres.
     */
    data: XOR<FraisTimbreUpdateManyMutationInput, FraisTimbreUncheckedUpdateManyInput>
    /**
     * Filter which FraisTimbres to update
     */
    where?: FraisTimbreWhereInput
    /**
     * Limit how many FraisTimbres to update.
     */
    limit?: number
  }

  /**
   * FraisTimbre upsert
   */
  export type FraisTimbreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * The filter to search for the FraisTimbre to update in case it exists.
     */
    where: FraisTimbreWhereUniqueInput
    /**
     * In case the FraisTimbre found by the `where` argument doesn't exist, create a new FraisTimbre with this data.
     */
    create: XOR<FraisTimbreCreateInput, FraisTimbreUncheckedCreateInput>
    /**
     * In case the FraisTimbre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FraisTimbreUpdateInput, FraisTimbreUncheckedUpdateInput>
  }

  /**
   * FraisTimbre delete
   */
  export type FraisTimbreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
    /**
     * Filter which FraisTimbre to delete.
     */
    where: FraisTimbreWhereUniqueInput
  }

  /**
   * FraisTimbre deleteMany
   */
  export type FraisTimbreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FraisTimbres to delete
     */
    where?: FraisTimbreWhereInput
    /**
     * Limit how many FraisTimbres to delete.
     */
    limit?: number
  }

  /**
   * FraisTimbre without action
   */
  export type FraisTimbreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FraisTimbre
     */
    select?: FraisTimbreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FraisTimbre
     */
    omit?: FraisTimbreOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CitoyenScalarFieldEnum: {
    ID_Citoyen: 'ID_Citoyen',
    Nom: 'Nom',
    Prenom: 'Prenom',
    DateNaissance: 'DateNaissance',
    LieuNaissance: 'LieuNaissance',
    Adresse: 'Adresse',
    Email: 'Email',
    Telephone: 'Telephone',
    Password: 'Password'
  };

  export type CitoyenScalarFieldEnum = (typeof CitoyenScalarFieldEnum)[keyof typeof CitoyenScalarFieldEnum]


  export const DemandeScalarFieldEnum: {
    ID_Demande: 'ID_Demande',
    ID_Citoyen: 'ID_Citoyen',
    TypeActe: 'TypeActe',
    NumeroActe: 'NumeroActe',
    Nom: 'Nom',
    Prenom: 'Prenom',
    Statut: 'Statut',
    DemandePourTier: 'DemandePourTier',
    DateDemande: 'DateDemande',
    DateActe: 'DateActe',
    ID_Paiement: 'ID_Paiement'
  };

  export type DemandeScalarFieldEnum = (typeof DemandeScalarFieldEnum)[keyof typeof DemandeScalarFieldEnum]


  export const Document_ActeScalarFieldEnum: {
    ID_Document_Acte: 'ID_Document_Acte',
    ID_Demande: 'ID_Demande',
    ID_Agent: 'ID_Agent',
    DateDelivrance: 'DateDelivrance',
    Fichier_PDF: 'Fichier_PDF',
    SignatureNumerique: 'SignatureNumerique',
    EstArchive: 'EstArchive',
    DateArchivage: 'DateArchivage'
  };

  export type Document_ActeScalarFieldEnum = (typeof Document_ActeScalarFieldEnum)[keyof typeof Document_ActeScalarFieldEnum]


  export const PaiementScalarFieldEnum: {
    ID_Paiement: 'ID_Paiement',
    Montant: 'Montant',
    ModePaiement: 'ModePaiement',
    DatePaiement: 'DatePaiement',
    Transaction_ID: 'Transaction_ID'
  };

  export type PaiementScalarFieldEnum = (typeof PaiementScalarFieldEnum)[keyof typeof PaiementScalarFieldEnum]


  export const AgentScalarFieldEnum: {
    ID_Agent: 'ID_Agent',
    Nom: 'Nom',
    Prenom: 'Prenom',
    Email: 'Email',
    Role: 'Role',
    Password: 'Password'
  };

  export type AgentScalarFieldEnum = (typeof AgentScalarFieldEnum)[keyof typeof AgentScalarFieldEnum]


  export const Historique_ModificationsScalarFieldEnum: {
    ID_Historique: 'ID_Historique',
    TypeEntite: 'TypeEntite',
    ID_Entite: 'ID_Entite',
    ID_Agent: 'ID_Agent',
    Action: 'Action',
    DateModification: 'DateModification',
    Ancienne_Valeur: 'Ancienne_Valeur',
    Nouvelle_Valeur: 'Nouvelle_Valeur'
  };

  export type Historique_ModificationsScalarFieldEnum = (typeof Historique_ModificationsScalarFieldEnum)[keyof typeof Historique_ModificationsScalarFieldEnum]


  export const FraisTimbreScalarFieldEnum: {
    ID_FraisTimbre: 'ID_FraisTimbre',
    TypeActe: 'TypeActe',
    PrixTimbre: 'PrixTimbre',
    FraisDossier: 'FraisDossier',
    CreatedAt: 'CreatedAt',
    UpdatedAt: 'UpdatedAt'
  };

  export type FraisTimbreScalarFieldEnum = (typeof FraisTimbreScalarFieldEnum)[keyof typeof FraisTimbreScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TypeActe'
   */
  export type EnumTypeActeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeActe'>
    


  /**
   * Reference to a field of type 'TypeActe[]'
   */
  export type ListEnumTypeActeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeActe[]'>
    


  /**
   * Reference to a field of type 'StatutDemande'
   */
  export type EnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande'>
    


  /**
   * Reference to a field of type 'StatutDemande[]'
   */
  export type ListEnumStatutDemandeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutDemande[]'>
    


  /**
   * Reference to a field of type 'DemandePourTier'
   */
  export type EnumDemandePourTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DemandePourTier'>
    


  /**
   * Reference to a field of type 'DemandePourTier[]'
   */
  export type ListEnumDemandePourTierFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DemandePourTier[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'ModePaiement'
   */
  export type EnumModePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModePaiement'>
    


  /**
   * Reference to a field of type 'ModePaiement[]'
   */
  export type ListEnumModePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ModePaiement[]'>
    


  /**
   * Reference to a field of type 'RoleAgent'
   */
  export type EnumRoleAgentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleAgent'>
    


  /**
   * Reference to a field of type 'RoleAgent[]'
   */
  export type ListEnumRoleAgentFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleAgent[]'>
    


  /**
   * Reference to a field of type 'TypeEntite'
   */
  export type EnumTypeEntiteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeEntite'>
    


  /**
   * Reference to a field of type 'TypeEntite[]'
   */
  export type ListEnumTypeEntiteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeEntite[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CitoyenWhereInput = {
    AND?: CitoyenWhereInput | CitoyenWhereInput[]
    OR?: CitoyenWhereInput[]
    NOT?: CitoyenWhereInput | CitoyenWhereInput[]
    ID_Citoyen?: StringFilter<"Citoyen"> | string
    Nom?: StringFilter<"Citoyen"> | string
    Prenom?: StringFilter<"Citoyen"> | string
    DateNaissance?: DateTimeFilter<"Citoyen"> | Date | string
    LieuNaissance?: StringFilter<"Citoyen"> | string
    Adresse?: StringFilter<"Citoyen"> | string
    Email?: StringFilter<"Citoyen"> | string
    Telephone?: StringFilter<"Citoyen"> | string
    Password?: StringFilter<"Citoyen"> | string
    Demandes?: DemandeListRelationFilter
  }

  export type CitoyenOrderByWithRelationInput = {
    ID_Citoyen?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    DateNaissance?: SortOrder
    LieuNaissance?: SortOrder
    Adresse?: SortOrder
    Email?: SortOrder
    Telephone?: SortOrder
    Password?: SortOrder
    Demandes?: DemandeOrderByRelationAggregateInput
  }

  export type CitoyenWhereUniqueInput = Prisma.AtLeast<{
    ID_Citoyen?: string
    Email?: string
    AND?: CitoyenWhereInput | CitoyenWhereInput[]
    OR?: CitoyenWhereInput[]
    NOT?: CitoyenWhereInput | CitoyenWhereInput[]
    Nom?: StringFilter<"Citoyen"> | string
    Prenom?: StringFilter<"Citoyen"> | string
    DateNaissance?: DateTimeFilter<"Citoyen"> | Date | string
    LieuNaissance?: StringFilter<"Citoyen"> | string
    Adresse?: StringFilter<"Citoyen"> | string
    Telephone?: StringFilter<"Citoyen"> | string
    Password?: StringFilter<"Citoyen"> | string
    Demandes?: DemandeListRelationFilter
  }, "ID_Citoyen" | "Email">

  export type CitoyenOrderByWithAggregationInput = {
    ID_Citoyen?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    DateNaissance?: SortOrder
    LieuNaissance?: SortOrder
    Adresse?: SortOrder
    Email?: SortOrder
    Telephone?: SortOrder
    Password?: SortOrder
    _count?: CitoyenCountOrderByAggregateInput
    _max?: CitoyenMaxOrderByAggregateInput
    _min?: CitoyenMinOrderByAggregateInput
  }

  export type CitoyenScalarWhereWithAggregatesInput = {
    AND?: CitoyenScalarWhereWithAggregatesInput | CitoyenScalarWhereWithAggregatesInput[]
    OR?: CitoyenScalarWhereWithAggregatesInput[]
    NOT?: CitoyenScalarWhereWithAggregatesInput | CitoyenScalarWhereWithAggregatesInput[]
    ID_Citoyen?: StringWithAggregatesFilter<"Citoyen"> | string
    Nom?: StringWithAggregatesFilter<"Citoyen"> | string
    Prenom?: StringWithAggregatesFilter<"Citoyen"> | string
    DateNaissance?: DateTimeWithAggregatesFilter<"Citoyen"> | Date | string
    LieuNaissance?: StringWithAggregatesFilter<"Citoyen"> | string
    Adresse?: StringWithAggregatesFilter<"Citoyen"> | string
    Email?: StringWithAggregatesFilter<"Citoyen"> | string
    Telephone?: StringWithAggregatesFilter<"Citoyen"> | string
    Password?: StringWithAggregatesFilter<"Citoyen"> | string
  }

  export type DemandeWhereInput = {
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    ID_Demande?: StringFilter<"Demande"> | string
    ID_Citoyen?: StringFilter<"Demande"> | string
    TypeActe?: EnumTypeActeFilter<"Demande"> | $Enums.TypeActe
    NumeroActe?: StringFilter<"Demande"> | string
    Nom?: StringFilter<"Demande"> | string
    Prenom?: StringFilter<"Demande"> | string
    Statut?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFilter<"Demande"> | $Enums.DemandePourTier
    DateDemande?: DateTimeFilter<"Demande"> | Date | string
    DateActe?: DateTimeNullableFilter<"Demande"> | Date | string | null
    ID_Paiement?: StringNullableFilter<"Demande"> | string | null
    Citoyen?: XOR<CitoyenScalarRelationFilter, CitoyenWhereInput>
    Paiement?: XOR<PaiementNullableScalarRelationFilter, PaiementWhereInput> | null
    Document?: XOR<Document_ActeNullableScalarRelationFilter, Document_ActeWhereInput> | null
    Historique?: Historique_ModificationsListRelationFilter
  }

  export type DemandeOrderByWithRelationInput = {
    ID_Demande?: SortOrder
    ID_Citoyen?: SortOrder
    TypeActe?: SortOrder
    NumeroActe?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Statut?: SortOrder
    DemandePourTier?: SortOrder
    DateDemande?: SortOrder
    DateActe?: SortOrderInput | SortOrder
    ID_Paiement?: SortOrderInput | SortOrder
    Citoyen?: CitoyenOrderByWithRelationInput
    Paiement?: PaiementOrderByWithRelationInput
    Document?: Document_ActeOrderByWithRelationInput
    Historique?: Historique_ModificationsOrderByRelationAggregateInput
  }

  export type DemandeWhereUniqueInput = Prisma.AtLeast<{
    ID_Demande?: string
    ID_Paiement?: string
    AND?: DemandeWhereInput | DemandeWhereInput[]
    OR?: DemandeWhereInput[]
    NOT?: DemandeWhereInput | DemandeWhereInput[]
    ID_Citoyen?: StringFilter<"Demande"> | string
    TypeActe?: EnumTypeActeFilter<"Demande"> | $Enums.TypeActe
    NumeroActe?: StringFilter<"Demande"> | string
    Nom?: StringFilter<"Demande"> | string
    Prenom?: StringFilter<"Demande"> | string
    Statut?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFilter<"Demande"> | $Enums.DemandePourTier
    DateDemande?: DateTimeFilter<"Demande"> | Date | string
    DateActe?: DateTimeNullableFilter<"Demande"> | Date | string | null
    Citoyen?: XOR<CitoyenScalarRelationFilter, CitoyenWhereInput>
    Paiement?: XOR<PaiementNullableScalarRelationFilter, PaiementWhereInput> | null
    Document?: XOR<Document_ActeNullableScalarRelationFilter, Document_ActeWhereInput> | null
    Historique?: Historique_ModificationsListRelationFilter
  }, "ID_Demande" | "ID_Paiement">

  export type DemandeOrderByWithAggregationInput = {
    ID_Demande?: SortOrder
    ID_Citoyen?: SortOrder
    TypeActe?: SortOrder
    NumeroActe?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Statut?: SortOrder
    DemandePourTier?: SortOrder
    DateDemande?: SortOrder
    DateActe?: SortOrderInput | SortOrder
    ID_Paiement?: SortOrderInput | SortOrder
    _count?: DemandeCountOrderByAggregateInput
    _max?: DemandeMaxOrderByAggregateInput
    _min?: DemandeMinOrderByAggregateInput
  }

  export type DemandeScalarWhereWithAggregatesInput = {
    AND?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    OR?: DemandeScalarWhereWithAggregatesInput[]
    NOT?: DemandeScalarWhereWithAggregatesInput | DemandeScalarWhereWithAggregatesInput[]
    ID_Demande?: StringWithAggregatesFilter<"Demande"> | string
    ID_Citoyen?: StringWithAggregatesFilter<"Demande"> | string
    TypeActe?: EnumTypeActeWithAggregatesFilter<"Demande"> | $Enums.TypeActe
    NumeroActe?: StringWithAggregatesFilter<"Demande"> | string
    Nom?: StringWithAggregatesFilter<"Demande"> | string
    Prenom?: StringWithAggregatesFilter<"Demande"> | string
    Statut?: EnumStatutDemandeWithAggregatesFilter<"Demande"> | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierWithAggregatesFilter<"Demande"> | $Enums.DemandePourTier
    DateDemande?: DateTimeWithAggregatesFilter<"Demande"> | Date | string
    DateActe?: DateTimeNullableWithAggregatesFilter<"Demande"> | Date | string | null
    ID_Paiement?: StringNullableWithAggregatesFilter<"Demande"> | string | null
  }

  export type Document_ActeWhereInput = {
    AND?: Document_ActeWhereInput | Document_ActeWhereInput[]
    OR?: Document_ActeWhereInput[]
    NOT?: Document_ActeWhereInput | Document_ActeWhereInput[]
    ID_Document_Acte?: StringFilter<"Document_Acte"> | string
    ID_Demande?: StringFilter<"Document_Acte"> | string
    ID_Agent?: StringFilter<"Document_Acte"> | string
    DateDelivrance?: DateTimeFilter<"Document_Acte"> | Date | string
    Fichier_PDF?: StringFilter<"Document_Acte"> | string
    SignatureNumerique?: StringFilter<"Document_Acte"> | string
    EstArchive?: BoolFilter<"Document_Acte"> | boolean
    DateArchivage?: DateTimeFilter<"Document_Acte"> | Date | string
    Demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
    Agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    Historique?: Historique_ModificationsListRelationFilter
  }

  export type Document_ActeOrderByWithRelationInput = {
    ID_Document_Acte?: SortOrder
    ID_Demande?: SortOrder
    ID_Agent?: SortOrder
    DateDelivrance?: SortOrder
    Fichier_PDF?: SortOrder
    SignatureNumerique?: SortOrder
    EstArchive?: SortOrder
    DateArchivage?: SortOrder
    Demande?: DemandeOrderByWithRelationInput
    Agent?: AgentOrderByWithRelationInput
    Historique?: Historique_ModificationsOrderByRelationAggregateInput
  }

  export type Document_ActeWhereUniqueInput = Prisma.AtLeast<{
    ID_Document_Acte?: string
    ID_Demande?: string
    AND?: Document_ActeWhereInput | Document_ActeWhereInput[]
    OR?: Document_ActeWhereInput[]
    NOT?: Document_ActeWhereInput | Document_ActeWhereInput[]
    ID_Agent?: StringFilter<"Document_Acte"> | string
    DateDelivrance?: DateTimeFilter<"Document_Acte"> | Date | string
    Fichier_PDF?: StringFilter<"Document_Acte"> | string
    SignatureNumerique?: StringFilter<"Document_Acte"> | string
    EstArchive?: BoolFilter<"Document_Acte"> | boolean
    DateArchivage?: DateTimeFilter<"Document_Acte"> | Date | string
    Demande?: XOR<DemandeScalarRelationFilter, DemandeWhereInput>
    Agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    Historique?: Historique_ModificationsListRelationFilter
  }, "ID_Document_Acte" | "ID_Demande">

  export type Document_ActeOrderByWithAggregationInput = {
    ID_Document_Acte?: SortOrder
    ID_Demande?: SortOrder
    ID_Agent?: SortOrder
    DateDelivrance?: SortOrder
    Fichier_PDF?: SortOrder
    SignatureNumerique?: SortOrder
    EstArchive?: SortOrder
    DateArchivage?: SortOrder
    _count?: Document_ActeCountOrderByAggregateInput
    _max?: Document_ActeMaxOrderByAggregateInput
    _min?: Document_ActeMinOrderByAggregateInput
  }

  export type Document_ActeScalarWhereWithAggregatesInput = {
    AND?: Document_ActeScalarWhereWithAggregatesInput | Document_ActeScalarWhereWithAggregatesInput[]
    OR?: Document_ActeScalarWhereWithAggregatesInput[]
    NOT?: Document_ActeScalarWhereWithAggregatesInput | Document_ActeScalarWhereWithAggregatesInput[]
    ID_Document_Acte?: StringWithAggregatesFilter<"Document_Acte"> | string
    ID_Demande?: StringWithAggregatesFilter<"Document_Acte"> | string
    ID_Agent?: StringWithAggregatesFilter<"Document_Acte"> | string
    DateDelivrance?: DateTimeWithAggregatesFilter<"Document_Acte"> | Date | string
    Fichier_PDF?: StringWithAggregatesFilter<"Document_Acte"> | string
    SignatureNumerique?: StringWithAggregatesFilter<"Document_Acte"> | string
    EstArchive?: BoolWithAggregatesFilter<"Document_Acte"> | boolean
    DateArchivage?: DateTimeWithAggregatesFilter<"Document_Acte"> | Date | string
  }

  export type PaiementWhereInput = {
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    ID_Paiement?: StringFilter<"Paiement"> | string
    Montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    ModePaiement?: EnumModePaiementFilter<"Paiement"> | $Enums.ModePaiement
    DatePaiement?: DateTimeFilter<"Paiement"> | Date | string
    Transaction_ID?: StringFilter<"Paiement"> | string
    Demande?: XOR<DemandeNullableScalarRelationFilter, DemandeWhereInput> | null
  }

  export type PaiementOrderByWithRelationInput = {
    ID_Paiement?: SortOrder
    Montant?: SortOrder
    ModePaiement?: SortOrder
    DatePaiement?: SortOrder
    Transaction_ID?: SortOrder
    Demande?: DemandeOrderByWithRelationInput
  }

  export type PaiementWhereUniqueInput = Prisma.AtLeast<{
    ID_Paiement?: string
    Transaction_ID?: string
    AND?: PaiementWhereInput | PaiementWhereInput[]
    OR?: PaiementWhereInput[]
    NOT?: PaiementWhereInput | PaiementWhereInput[]
    Montant?: DecimalFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    ModePaiement?: EnumModePaiementFilter<"Paiement"> | $Enums.ModePaiement
    DatePaiement?: DateTimeFilter<"Paiement"> | Date | string
    Demande?: XOR<DemandeNullableScalarRelationFilter, DemandeWhereInput> | null
  }, "ID_Paiement" | "Transaction_ID">

  export type PaiementOrderByWithAggregationInput = {
    ID_Paiement?: SortOrder
    Montant?: SortOrder
    ModePaiement?: SortOrder
    DatePaiement?: SortOrder
    Transaction_ID?: SortOrder
    _count?: PaiementCountOrderByAggregateInput
    _avg?: PaiementAvgOrderByAggregateInput
    _max?: PaiementMaxOrderByAggregateInput
    _min?: PaiementMinOrderByAggregateInput
    _sum?: PaiementSumOrderByAggregateInput
  }

  export type PaiementScalarWhereWithAggregatesInput = {
    AND?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    OR?: PaiementScalarWhereWithAggregatesInput[]
    NOT?: PaiementScalarWhereWithAggregatesInput | PaiementScalarWhereWithAggregatesInput[]
    ID_Paiement?: StringWithAggregatesFilter<"Paiement"> | string
    Montant?: DecimalWithAggregatesFilter<"Paiement"> | Decimal | DecimalJsLike | number | string
    ModePaiement?: EnumModePaiementWithAggregatesFilter<"Paiement"> | $Enums.ModePaiement
    DatePaiement?: DateTimeWithAggregatesFilter<"Paiement"> | Date | string
    Transaction_ID?: StringWithAggregatesFilter<"Paiement"> | string
  }

  export type AgentWhereInput = {
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    ID_Agent?: StringFilter<"Agent"> | string
    Nom?: StringFilter<"Agent"> | string
    Prenom?: StringFilter<"Agent"> | string
    Email?: StringFilter<"Agent"> | string
    Role?: EnumRoleAgentFilter<"Agent"> | $Enums.RoleAgent
    Password?: StringFilter<"Agent"> | string
    Documents?: Document_ActeListRelationFilter
    Historiques?: Historique_ModificationsListRelationFilter
  }

  export type AgentOrderByWithRelationInput = {
    ID_Agent?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
    Documents?: Document_ActeOrderByRelationAggregateInput
    Historiques?: Historique_ModificationsOrderByRelationAggregateInput
  }

  export type AgentWhereUniqueInput = Prisma.AtLeast<{
    ID_Agent?: string
    Email?: string
    AND?: AgentWhereInput | AgentWhereInput[]
    OR?: AgentWhereInput[]
    NOT?: AgentWhereInput | AgentWhereInput[]
    Nom?: StringFilter<"Agent"> | string
    Prenom?: StringFilter<"Agent"> | string
    Role?: EnumRoleAgentFilter<"Agent"> | $Enums.RoleAgent
    Password?: StringFilter<"Agent"> | string
    Documents?: Document_ActeListRelationFilter
    Historiques?: Historique_ModificationsListRelationFilter
  }, "ID_Agent" | "Email">

  export type AgentOrderByWithAggregationInput = {
    ID_Agent?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
    _count?: AgentCountOrderByAggregateInput
    _max?: AgentMaxOrderByAggregateInput
    _min?: AgentMinOrderByAggregateInput
  }

  export type AgentScalarWhereWithAggregatesInput = {
    AND?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    OR?: AgentScalarWhereWithAggregatesInput[]
    NOT?: AgentScalarWhereWithAggregatesInput | AgentScalarWhereWithAggregatesInput[]
    ID_Agent?: StringWithAggregatesFilter<"Agent"> | string
    Nom?: StringWithAggregatesFilter<"Agent"> | string
    Prenom?: StringWithAggregatesFilter<"Agent"> | string
    Email?: StringWithAggregatesFilter<"Agent"> | string
    Role?: EnumRoleAgentWithAggregatesFilter<"Agent"> | $Enums.RoleAgent
    Password?: StringWithAggregatesFilter<"Agent"> | string
  }

  export type Historique_ModificationsWhereInput = {
    AND?: Historique_ModificationsWhereInput | Historique_ModificationsWhereInput[]
    OR?: Historique_ModificationsWhereInput[]
    NOT?: Historique_ModificationsWhereInput | Historique_ModificationsWhereInput[]
    ID_Historique?: StringFilter<"Historique_Modifications"> | string
    TypeEntite?: EnumTypeEntiteFilter<"Historique_Modifications"> | $Enums.TypeEntite
    ID_Entite?: StringFilter<"Historique_Modifications"> | string
    ID_Agent?: StringFilter<"Historique_Modifications"> | string
    Action?: StringFilter<"Historique_Modifications"> | string
    DateModification?: DateTimeFilter<"Historique_Modifications"> | Date | string
    Ancienne_Valeur?: StringFilter<"Historique_Modifications"> | string
    Nouvelle_Valeur?: StringFilter<"Historique_Modifications"> | string
    Agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    Demande?: XOR<DemandeNullableScalarRelationFilter, DemandeWhereInput> | null
    Document?: XOR<Document_ActeNullableScalarRelationFilter, Document_ActeWhereInput> | null
  }

  export type Historique_ModificationsOrderByWithRelationInput = {
    ID_Historique?: SortOrder
    TypeEntite?: SortOrder
    ID_Entite?: SortOrder
    ID_Agent?: SortOrder
    Action?: SortOrder
    DateModification?: SortOrder
    Ancienne_Valeur?: SortOrder
    Nouvelle_Valeur?: SortOrder
    Agent?: AgentOrderByWithRelationInput
    Demande?: DemandeOrderByWithRelationInput
    Document?: Document_ActeOrderByWithRelationInput
  }

  export type Historique_ModificationsWhereUniqueInput = Prisma.AtLeast<{
    ID_Historique?: string
    AND?: Historique_ModificationsWhereInput | Historique_ModificationsWhereInput[]
    OR?: Historique_ModificationsWhereInput[]
    NOT?: Historique_ModificationsWhereInput | Historique_ModificationsWhereInput[]
    TypeEntite?: EnumTypeEntiteFilter<"Historique_Modifications"> | $Enums.TypeEntite
    ID_Entite?: StringFilter<"Historique_Modifications"> | string
    ID_Agent?: StringFilter<"Historique_Modifications"> | string
    Action?: StringFilter<"Historique_Modifications"> | string
    DateModification?: DateTimeFilter<"Historique_Modifications"> | Date | string
    Ancienne_Valeur?: StringFilter<"Historique_Modifications"> | string
    Nouvelle_Valeur?: StringFilter<"Historique_Modifications"> | string
    Agent?: XOR<AgentScalarRelationFilter, AgentWhereInput>
    Demande?: XOR<DemandeNullableScalarRelationFilter, DemandeWhereInput> | null
    Document?: XOR<Document_ActeNullableScalarRelationFilter, Document_ActeWhereInput> | null
  }, "ID_Historique">

  export type Historique_ModificationsOrderByWithAggregationInput = {
    ID_Historique?: SortOrder
    TypeEntite?: SortOrder
    ID_Entite?: SortOrder
    ID_Agent?: SortOrder
    Action?: SortOrder
    DateModification?: SortOrder
    Ancienne_Valeur?: SortOrder
    Nouvelle_Valeur?: SortOrder
    _count?: Historique_ModificationsCountOrderByAggregateInput
    _max?: Historique_ModificationsMaxOrderByAggregateInput
    _min?: Historique_ModificationsMinOrderByAggregateInput
  }

  export type Historique_ModificationsScalarWhereWithAggregatesInput = {
    AND?: Historique_ModificationsScalarWhereWithAggregatesInput | Historique_ModificationsScalarWhereWithAggregatesInput[]
    OR?: Historique_ModificationsScalarWhereWithAggregatesInput[]
    NOT?: Historique_ModificationsScalarWhereWithAggregatesInput | Historique_ModificationsScalarWhereWithAggregatesInput[]
    ID_Historique?: StringWithAggregatesFilter<"Historique_Modifications"> | string
    TypeEntite?: EnumTypeEntiteWithAggregatesFilter<"Historique_Modifications"> | $Enums.TypeEntite
    ID_Entite?: StringWithAggregatesFilter<"Historique_Modifications"> | string
    ID_Agent?: StringWithAggregatesFilter<"Historique_Modifications"> | string
    Action?: StringWithAggregatesFilter<"Historique_Modifications"> | string
    DateModification?: DateTimeWithAggregatesFilter<"Historique_Modifications"> | Date | string
    Ancienne_Valeur?: StringWithAggregatesFilter<"Historique_Modifications"> | string
    Nouvelle_Valeur?: StringWithAggregatesFilter<"Historique_Modifications"> | string
  }

  export type FraisTimbreWhereInput = {
    AND?: FraisTimbreWhereInput | FraisTimbreWhereInput[]
    OR?: FraisTimbreWhereInput[]
    NOT?: FraisTimbreWhereInput | FraisTimbreWhereInput[]
    ID_FraisTimbre?: IntFilter<"FraisTimbre"> | number
    TypeActe?: EnumTypeActeFilter<"FraisTimbre"> | $Enums.TypeActe
    PrixTimbre?: FloatFilter<"FraisTimbre"> | number
    FraisDossier?: FloatNullableFilter<"FraisTimbre"> | number | null
    CreatedAt?: DateTimeFilter<"FraisTimbre"> | Date | string
    UpdatedAt?: DateTimeFilter<"FraisTimbre"> | Date | string
  }

  export type FraisTimbreOrderByWithRelationInput = {
    ID_FraisTimbre?: SortOrder
    TypeActe?: SortOrder
    PrixTimbre?: SortOrder
    FraisDossier?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type FraisTimbreWhereUniqueInput = Prisma.AtLeast<{
    ID_FraisTimbre?: number
    TypeActe?: $Enums.TypeActe
    AND?: FraisTimbreWhereInput | FraisTimbreWhereInput[]
    OR?: FraisTimbreWhereInput[]
    NOT?: FraisTimbreWhereInput | FraisTimbreWhereInput[]
    PrixTimbre?: FloatFilter<"FraisTimbre"> | number
    FraisDossier?: FloatNullableFilter<"FraisTimbre"> | number | null
    CreatedAt?: DateTimeFilter<"FraisTimbre"> | Date | string
    UpdatedAt?: DateTimeFilter<"FraisTimbre"> | Date | string
  }, "ID_FraisTimbre" | "TypeActe">

  export type FraisTimbreOrderByWithAggregationInput = {
    ID_FraisTimbre?: SortOrder
    TypeActe?: SortOrder
    PrixTimbre?: SortOrder
    FraisDossier?: SortOrderInput | SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
    _count?: FraisTimbreCountOrderByAggregateInput
    _avg?: FraisTimbreAvgOrderByAggregateInput
    _max?: FraisTimbreMaxOrderByAggregateInput
    _min?: FraisTimbreMinOrderByAggregateInput
    _sum?: FraisTimbreSumOrderByAggregateInput
  }

  export type FraisTimbreScalarWhereWithAggregatesInput = {
    AND?: FraisTimbreScalarWhereWithAggregatesInput | FraisTimbreScalarWhereWithAggregatesInput[]
    OR?: FraisTimbreScalarWhereWithAggregatesInput[]
    NOT?: FraisTimbreScalarWhereWithAggregatesInput | FraisTimbreScalarWhereWithAggregatesInput[]
    ID_FraisTimbre?: IntWithAggregatesFilter<"FraisTimbre"> | number
    TypeActe?: EnumTypeActeWithAggregatesFilter<"FraisTimbre"> | $Enums.TypeActe
    PrixTimbre?: FloatWithAggregatesFilter<"FraisTimbre"> | number
    FraisDossier?: FloatNullableWithAggregatesFilter<"FraisTimbre"> | number | null
    CreatedAt?: DateTimeWithAggregatesFilter<"FraisTimbre"> | Date | string
    UpdatedAt?: DateTimeWithAggregatesFilter<"FraisTimbre"> | Date | string
  }

  export type CitoyenCreateInput = {
    ID_Citoyen?: string
    Nom: string
    Prenom: string
    DateNaissance: Date | string
    LieuNaissance: string
    Adresse: string
    Email: string
    Telephone: string
    Password: string
    Demandes?: DemandeCreateNestedManyWithoutCitoyenInput
  }

  export type CitoyenUncheckedCreateInput = {
    ID_Citoyen?: string
    Nom: string
    Prenom: string
    DateNaissance: Date | string
    LieuNaissance: string
    Adresse: string
    Email: string
    Telephone: string
    Password: string
    Demandes?: DemandeUncheckedCreateNestedManyWithoutCitoyenInput
  }

  export type CitoyenUpdateInput = {
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    DateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    LieuNaissance?: StringFieldUpdateOperationsInput | string
    Adresse?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telephone?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Demandes?: DemandeUpdateManyWithoutCitoyenNestedInput
  }

  export type CitoyenUncheckedUpdateInput = {
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    DateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    LieuNaissance?: StringFieldUpdateOperationsInput | string
    Adresse?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telephone?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
    Demandes?: DemandeUncheckedUpdateManyWithoutCitoyenNestedInput
  }

  export type CitoyenCreateManyInput = {
    ID_Citoyen?: string
    Nom: string
    Prenom: string
    DateNaissance: Date | string
    LieuNaissance: string
    Adresse: string
    Email: string
    Telephone: string
    Password: string
  }

  export type CitoyenUpdateManyMutationInput = {
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    DateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    LieuNaissance?: StringFieldUpdateOperationsInput | string
    Adresse?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telephone?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type CitoyenUncheckedUpdateManyInput = {
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    DateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    LieuNaissance?: StringFieldUpdateOperationsInput | string
    Adresse?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telephone?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type DemandeCreateInput = {
    ID_Demande?: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    Citoyen: CitoyenCreateNestedOneWithoutDemandesInput
    Paiement?: PaiementCreateNestedOneWithoutDemandeInput
    Document?: Document_ActeCreateNestedOneWithoutDemandeInput
    Historique?: Historique_ModificationsCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUncheckedCreateInput = {
    ID_Demande?: string
    ID_Citoyen: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    ID_Paiement?: string | null
    Document?: Document_ActeUncheckedCreateNestedOneWithoutDemandeInput
    Historique?: Historique_ModificationsUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUpdateInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Citoyen?: CitoyenUpdateOneRequiredWithoutDemandesNestedInput
    Paiement?: PaiementUpdateOneWithoutDemandeNestedInput
    Document?: Document_ActeUpdateOneWithoutDemandeNestedInput
    Historique?: Historique_ModificationsUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_Paiement?: NullableStringFieldUpdateOperationsInput | string | null
    Document?: Document_ActeUncheckedUpdateOneWithoutDemandeNestedInput
    Historique?: Historique_ModificationsUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeCreateManyInput = {
    ID_Demande?: string
    ID_Citoyen: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    ID_Paiement?: string | null
  }

  export type DemandeUpdateManyMutationInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DemandeUncheckedUpdateManyInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_Paiement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Document_ActeCreateInput = {
    ID_Document_Acte?: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
    Demande: DemandeCreateNestedOneWithoutDocumentInput
    Agent: AgentCreateNestedOneWithoutDocumentsInput
    Historique?: Historique_ModificationsCreateNestedManyWithoutDocumentInput
  }

  export type Document_ActeUncheckedCreateInput = {
    ID_Document_Acte?: string
    ID_Demande: string
    ID_Agent: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
    Historique?: Historique_ModificationsUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type Document_ActeUpdateInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
    Demande?: DemandeUpdateOneRequiredWithoutDocumentNestedInput
    Agent?: AgentUpdateOneRequiredWithoutDocumentsNestedInput
    Historique?: Historique_ModificationsUpdateManyWithoutDocumentNestedInput
  }

  export type Document_ActeUncheckedUpdateInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    ID_Demande?: StringFieldUpdateOperationsInput | string
    ID_Agent?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
    Historique?: Historique_ModificationsUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type Document_ActeCreateManyInput = {
    ID_Document_Acte?: string
    ID_Demande: string
    ID_Agent: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
  }

  export type Document_ActeUpdateManyMutationInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Document_ActeUncheckedUpdateManyInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    ID_Demande?: StringFieldUpdateOperationsInput | string
    ID_Agent?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaiementCreateInput = {
    ID_Paiement?: string
    Montant: Decimal | DecimalJsLike | number | string
    ModePaiement: $Enums.ModePaiement
    DatePaiement: Date | string
    Transaction_ID: string
    Demande?: DemandeCreateNestedOneWithoutPaiementInput
  }

  export type PaiementUncheckedCreateInput = {
    ID_Paiement?: string
    Montant: Decimal | DecimalJsLike | number | string
    ModePaiement: $Enums.ModePaiement
    DatePaiement: Date | string
    Transaction_ID: string
    Demande?: DemandeUncheckedCreateNestedOneWithoutPaiementInput
  }

  export type PaiementUpdateInput = {
    ID_Paiement?: StringFieldUpdateOperationsInput | string
    Montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ModePaiement?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    DatePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction_ID?: StringFieldUpdateOperationsInput | string
    Demande?: DemandeUpdateOneWithoutPaiementNestedInput
  }

  export type PaiementUncheckedUpdateInput = {
    ID_Paiement?: StringFieldUpdateOperationsInput | string
    Montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ModePaiement?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    DatePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction_ID?: StringFieldUpdateOperationsInput | string
    Demande?: DemandeUncheckedUpdateOneWithoutPaiementNestedInput
  }

  export type PaiementCreateManyInput = {
    ID_Paiement?: string
    Montant: Decimal | DecimalJsLike | number | string
    ModePaiement: $Enums.ModePaiement
    DatePaiement: Date | string
    Transaction_ID: string
  }

  export type PaiementUpdateManyMutationInput = {
    ID_Paiement?: StringFieldUpdateOperationsInput | string
    Montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ModePaiement?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    DatePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction_ID?: StringFieldUpdateOperationsInput | string
  }

  export type PaiementUncheckedUpdateManyInput = {
    ID_Paiement?: StringFieldUpdateOperationsInput | string
    Montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ModePaiement?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    DatePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction_ID?: StringFieldUpdateOperationsInput | string
  }

  export type AgentCreateInput = {
    ID_Agent?: string
    Nom: string
    Prenom: string
    Email: string
    Role: $Enums.RoleAgent
    Password: string
    Documents?: Document_ActeCreateNestedManyWithoutAgentInput
    Historiques?: Historique_ModificationsCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateInput = {
    ID_Agent?: string
    Nom: string
    Prenom: string
    Email: string
    Role: $Enums.RoleAgent
    Password: string
    Documents?: Document_ActeUncheckedCreateNestedManyWithoutAgentInput
    Historiques?: Historique_ModificationsUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentUpdateInput = {
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleAgentFieldUpdateOperationsInput | $Enums.RoleAgent
    Password?: StringFieldUpdateOperationsInput | string
    Documents?: Document_ActeUpdateManyWithoutAgentNestedInput
    Historiques?: Historique_ModificationsUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateInput = {
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleAgentFieldUpdateOperationsInput | $Enums.RoleAgent
    Password?: StringFieldUpdateOperationsInput | string
    Documents?: Document_ActeUncheckedUpdateManyWithoutAgentNestedInput
    Historiques?: Historique_ModificationsUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type AgentCreateManyInput = {
    ID_Agent?: string
    Nom: string
    Prenom: string
    Email: string
    Role: $Enums.RoleAgent
    Password: string
  }

  export type AgentUpdateManyMutationInput = {
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleAgentFieldUpdateOperationsInput | $Enums.RoleAgent
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type AgentUncheckedUpdateManyInput = {
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleAgentFieldUpdateOperationsInput | $Enums.RoleAgent
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type Historique_ModificationsCreateInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
    Agent: AgentCreateNestedOneWithoutHistoriquesInput
    Demande?: DemandeCreateNestedOneWithoutHistoriqueInput
    Document?: Document_ActeCreateNestedOneWithoutHistoriqueInput
  }

  export type Historique_ModificationsUncheckedCreateInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    ID_Entite: string
    ID_Agent: string
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
  }

  export type Historique_ModificationsUpdateInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
    Agent?: AgentUpdateOneRequiredWithoutHistoriquesNestedInput
    Demande?: DemandeUpdateOneWithoutHistoriqueNestedInput
    Document?: Document_ActeUpdateOneWithoutHistoriqueNestedInput
  }

  export type Historique_ModificationsUncheckedUpdateInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    ID_Entite?: StringFieldUpdateOperationsInput | string
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
  }

  export type Historique_ModificationsCreateManyInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    ID_Entite: string
    ID_Agent: string
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
  }

  export type Historique_ModificationsUpdateManyMutationInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
  }

  export type Historique_ModificationsUncheckedUpdateManyInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    ID_Entite?: StringFieldUpdateOperationsInput | string
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
  }

  export type FraisTimbreCreateInput = {
    TypeActe: $Enums.TypeActe
    PrixTimbre: number
    FraisDossier?: number | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type FraisTimbreUncheckedCreateInput = {
    ID_FraisTimbre?: number
    TypeActe: $Enums.TypeActe
    PrixTimbre: number
    FraisDossier?: number | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type FraisTimbreUpdateInput = {
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    PrixTimbre?: FloatFieldUpdateOperationsInput | number
    FraisDossier?: NullableFloatFieldUpdateOperationsInput | number | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FraisTimbreUncheckedUpdateInput = {
    ID_FraisTimbre?: IntFieldUpdateOperationsInput | number
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    PrixTimbre?: FloatFieldUpdateOperationsInput | number
    FraisDossier?: NullableFloatFieldUpdateOperationsInput | number | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FraisTimbreCreateManyInput = {
    ID_FraisTimbre?: number
    TypeActe: $Enums.TypeActe
    PrixTimbre: number
    FraisDossier?: number | null
    CreatedAt?: Date | string
    UpdatedAt?: Date | string
  }

  export type FraisTimbreUpdateManyMutationInput = {
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    PrixTimbre?: FloatFieldUpdateOperationsInput | number
    FraisDossier?: NullableFloatFieldUpdateOperationsInput | number | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FraisTimbreUncheckedUpdateManyInput = {
    ID_FraisTimbre?: IntFieldUpdateOperationsInput | number
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    PrixTimbre?: FloatFieldUpdateOperationsInput | number
    FraisDossier?: NullableFloatFieldUpdateOperationsInput | number | null
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UpdatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DemandeListRelationFilter = {
    every?: DemandeWhereInput
    some?: DemandeWhereInput
    none?: DemandeWhereInput
  }

  export type DemandeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CitoyenCountOrderByAggregateInput = {
    ID_Citoyen?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    DateNaissance?: SortOrder
    LieuNaissance?: SortOrder
    Adresse?: SortOrder
    Email?: SortOrder
    Telephone?: SortOrder
    Password?: SortOrder
  }

  export type CitoyenMaxOrderByAggregateInput = {
    ID_Citoyen?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    DateNaissance?: SortOrder
    LieuNaissance?: SortOrder
    Adresse?: SortOrder
    Email?: SortOrder
    Telephone?: SortOrder
    Password?: SortOrder
  }

  export type CitoyenMinOrderByAggregateInput = {
    ID_Citoyen?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    DateNaissance?: SortOrder
    LieuNaissance?: SortOrder
    Adresse?: SortOrder
    Email?: SortOrder
    Telephone?: SortOrder
    Password?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumTypeActeFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeActe | EnumTypeActeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeActe[] | ListEnumTypeActeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeActe[] | ListEnumTypeActeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeActeFilter<$PrismaModel> | $Enums.TypeActe
  }

  export type EnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type EnumDemandePourTierFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandePourTier | EnumDemandePourTierFieldRefInput<$PrismaModel>
    in?: $Enums.DemandePourTier[] | ListEnumDemandePourTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandePourTier[] | ListEnumDemandePourTierFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandePourTierFilter<$PrismaModel> | $Enums.DemandePourTier
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CitoyenScalarRelationFilter = {
    is?: CitoyenWhereInput
    isNot?: CitoyenWhereInput
  }

  export type PaiementNullableScalarRelationFilter = {
    is?: PaiementWhereInput | null
    isNot?: PaiementWhereInput | null
  }

  export type Document_ActeNullableScalarRelationFilter = {
    is?: Document_ActeWhereInput | null
    isNot?: Document_ActeWhereInput | null
  }

  export type Historique_ModificationsListRelationFilter = {
    every?: Historique_ModificationsWhereInput
    some?: Historique_ModificationsWhereInput
    none?: Historique_ModificationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Historique_ModificationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DemandeCountOrderByAggregateInput = {
    ID_Demande?: SortOrder
    ID_Citoyen?: SortOrder
    TypeActe?: SortOrder
    NumeroActe?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Statut?: SortOrder
    DemandePourTier?: SortOrder
    DateDemande?: SortOrder
    DateActe?: SortOrder
    ID_Paiement?: SortOrder
  }

  export type DemandeMaxOrderByAggregateInput = {
    ID_Demande?: SortOrder
    ID_Citoyen?: SortOrder
    TypeActe?: SortOrder
    NumeroActe?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Statut?: SortOrder
    DemandePourTier?: SortOrder
    DateDemande?: SortOrder
    DateActe?: SortOrder
    ID_Paiement?: SortOrder
  }

  export type DemandeMinOrderByAggregateInput = {
    ID_Demande?: SortOrder
    ID_Citoyen?: SortOrder
    TypeActe?: SortOrder
    NumeroActe?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Statut?: SortOrder
    DemandePourTier?: SortOrder
    DateDemande?: SortOrder
    DateActe?: SortOrder
    ID_Paiement?: SortOrder
  }

  export type EnumTypeActeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeActe | EnumTypeActeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeActe[] | ListEnumTypeActeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeActe[] | ListEnumTypeActeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeActeWithAggregatesFilter<$PrismaModel> | $Enums.TypeActe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeActeFilter<$PrismaModel>
    _max?: NestedEnumTypeActeFilter<$PrismaModel>
  }

  export type EnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
  }

  export type EnumDemandePourTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandePourTier | EnumDemandePourTierFieldRefInput<$PrismaModel>
    in?: $Enums.DemandePourTier[] | ListEnumDemandePourTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandePourTier[] | ListEnumDemandePourTierFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandePourTierWithAggregatesFilter<$PrismaModel> | $Enums.DemandePourTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDemandePourTierFilter<$PrismaModel>
    _max?: NestedEnumDemandePourTierFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DemandeScalarRelationFilter = {
    is?: DemandeWhereInput
    isNot?: DemandeWhereInput
  }

  export type AgentScalarRelationFilter = {
    is?: AgentWhereInput
    isNot?: AgentWhereInput
  }

  export type Document_ActeCountOrderByAggregateInput = {
    ID_Document_Acte?: SortOrder
    ID_Demande?: SortOrder
    ID_Agent?: SortOrder
    DateDelivrance?: SortOrder
    Fichier_PDF?: SortOrder
    SignatureNumerique?: SortOrder
    EstArchive?: SortOrder
    DateArchivage?: SortOrder
  }

  export type Document_ActeMaxOrderByAggregateInput = {
    ID_Document_Acte?: SortOrder
    ID_Demande?: SortOrder
    ID_Agent?: SortOrder
    DateDelivrance?: SortOrder
    Fichier_PDF?: SortOrder
    SignatureNumerique?: SortOrder
    EstArchive?: SortOrder
    DateArchivage?: SortOrder
  }

  export type Document_ActeMinOrderByAggregateInput = {
    ID_Document_Acte?: SortOrder
    ID_Demande?: SortOrder
    ID_Agent?: SortOrder
    DateDelivrance?: SortOrder
    Fichier_PDF?: SortOrder
    SignatureNumerique?: SortOrder
    EstArchive?: SortOrder
    DateArchivage?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumModePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[] | ListEnumModePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModePaiement[] | ListEnumModePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumModePaiementFilter<$PrismaModel> | $Enums.ModePaiement
  }

  export type DemandeNullableScalarRelationFilter = {
    is?: DemandeWhereInput | null
    isNot?: DemandeWhereInput | null
  }

  export type PaiementCountOrderByAggregateInput = {
    ID_Paiement?: SortOrder
    Montant?: SortOrder
    ModePaiement?: SortOrder
    DatePaiement?: SortOrder
    Transaction_ID?: SortOrder
  }

  export type PaiementAvgOrderByAggregateInput = {
    Montant?: SortOrder
  }

  export type PaiementMaxOrderByAggregateInput = {
    ID_Paiement?: SortOrder
    Montant?: SortOrder
    ModePaiement?: SortOrder
    DatePaiement?: SortOrder
    Transaction_ID?: SortOrder
  }

  export type PaiementMinOrderByAggregateInput = {
    ID_Paiement?: SortOrder
    Montant?: SortOrder
    ModePaiement?: SortOrder
    DatePaiement?: SortOrder
    Transaction_ID?: SortOrder
  }

  export type PaiementSumOrderByAggregateInput = {
    Montant?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumModePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[] | ListEnumModePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModePaiement[] | ListEnumModePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumModePaiementWithAggregatesFilter<$PrismaModel> | $Enums.ModePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModePaiementFilter<$PrismaModel>
    _max?: NestedEnumModePaiementFilter<$PrismaModel>
  }

  export type EnumRoleAgentFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleAgent | EnumRoleAgentFieldRefInput<$PrismaModel>
    in?: $Enums.RoleAgent[] | ListEnumRoleAgentFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleAgent[] | ListEnumRoleAgentFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleAgentFilter<$PrismaModel> | $Enums.RoleAgent
  }

  export type Document_ActeListRelationFilter = {
    every?: Document_ActeWhereInput
    some?: Document_ActeWhereInput
    none?: Document_ActeWhereInput
  }

  export type Document_ActeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentCountOrderByAggregateInput = {
    ID_Agent?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
  }

  export type AgentMaxOrderByAggregateInput = {
    ID_Agent?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
  }

  export type AgentMinOrderByAggregateInput = {
    ID_Agent?: SortOrder
    Nom?: SortOrder
    Prenom?: SortOrder
    Email?: SortOrder
    Role?: SortOrder
    Password?: SortOrder
  }

  export type EnumRoleAgentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleAgent | EnumRoleAgentFieldRefInput<$PrismaModel>
    in?: $Enums.RoleAgent[] | ListEnumRoleAgentFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleAgent[] | ListEnumRoleAgentFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleAgentWithAggregatesFilter<$PrismaModel> | $Enums.RoleAgent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleAgentFilter<$PrismaModel>
    _max?: NestedEnumRoleAgentFilter<$PrismaModel>
  }

  export type EnumTypeEntiteFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEntite | EnumTypeEntiteFieldRefInput<$PrismaModel>
    in?: $Enums.TypeEntite[] | ListEnumTypeEntiteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeEntite[] | ListEnumTypeEntiteFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeEntiteFilter<$PrismaModel> | $Enums.TypeEntite
  }

  export type Historique_ModificationsCountOrderByAggregateInput = {
    ID_Historique?: SortOrder
    TypeEntite?: SortOrder
    ID_Entite?: SortOrder
    ID_Agent?: SortOrder
    Action?: SortOrder
    DateModification?: SortOrder
    Ancienne_Valeur?: SortOrder
    Nouvelle_Valeur?: SortOrder
  }

  export type Historique_ModificationsMaxOrderByAggregateInput = {
    ID_Historique?: SortOrder
    TypeEntite?: SortOrder
    ID_Entite?: SortOrder
    ID_Agent?: SortOrder
    Action?: SortOrder
    DateModification?: SortOrder
    Ancienne_Valeur?: SortOrder
    Nouvelle_Valeur?: SortOrder
  }

  export type Historique_ModificationsMinOrderByAggregateInput = {
    ID_Historique?: SortOrder
    TypeEntite?: SortOrder
    ID_Entite?: SortOrder
    ID_Agent?: SortOrder
    Action?: SortOrder
    DateModification?: SortOrder
    Ancienne_Valeur?: SortOrder
    Nouvelle_Valeur?: SortOrder
  }

  export type EnumTypeEntiteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEntite | EnumTypeEntiteFieldRefInput<$PrismaModel>
    in?: $Enums.TypeEntite[] | ListEnumTypeEntiteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeEntite[] | ListEnumTypeEntiteFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeEntiteWithAggregatesFilter<$PrismaModel> | $Enums.TypeEntite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeEntiteFilter<$PrismaModel>
    _max?: NestedEnumTypeEntiteFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FraisTimbreCountOrderByAggregateInput = {
    ID_FraisTimbre?: SortOrder
    TypeActe?: SortOrder
    PrixTimbre?: SortOrder
    FraisDossier?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type FraisTimbreAvgOrderByAggregateInput = {
    ID_FraisTimbre?: SortOrder
    PrixTimbre?: SortOrder
    FraisDossier?: SortOrder
  }

  export type FraisTimbreMaxOrderByAggregateInput = {
    ID_FraisTimbre?: SortOrder
    TypeActe?: SortOrder
    PrixTimbre?: SortOrder
    FraisDossier?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type FraisTimbreMinOrderByAggregateInput = {
    ID_FraisTimbre?: SortOrder
    TypeActe?: SortOrder
    PrixTimbre?: SortOrder
    FraisDossier?: SortOrder
    CreatedAt?: SortOrder
    UpdatedAt?: SortOrder
  }

  export type FraisTimbreSumOrderByAggregateInput = {
    ID_FraisTimbre?: SortOrder
    PrixTimbre?: SortOrder
    FraisDossier?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DemandeCreateNestedManyWithoutCitoyenInput = {
    create?: XOR<DemandeCreateWithoutCitoyenInput, DemandeUncheckedCreateWithoutCitoyenInput> | DemandeCreateWithoutCitoyenInput[] | DemandeUncheckedCreateWithoutCitoyenInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutCitoyenInput | DemandeCreateOrConnectWithoutCitoyenInput[]
    createMany?: DemandeCreateManyCitoyenInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type DemandeUncheckedCreateNestedManyWithoutCitoyenInput = {
    create?: XOR<DemandeCreateWithoutCitoyenInput, DemandeUncheckedCreateWithoutCitoyenInput> | DemandeCreateWithoutCitoyenInput[] | DemandeUncheckedCreateWithoutCitoyenInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutCitoyenInput | DemandeCreateOrConnectWithoutCitoyenInput[]
    createMany?: DemandeCreateManyCitoyenInputEnvelope
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DemandeUpdateManyWithoutCitoyenNestedInput = {
    create?: XOR<DemandeCreateWithoutCitoyenInput, DemandeUncheckedCreateWithoutCitoyenInput> | DemandeCreateWithoutCitoyenInput[] | DemandeUncheckedCreateWithoutCitoyenInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutCitoyenInput | DemandeCreateOrConnectWithoutCitoyenInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutCitoyenInput | DemandeUpsertWithWhereUniqueWithoutCitoyenInput[]
    createMany?: DemandeCreateManyCitoyenInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutCitoyenInput | DemandeUpdateWithWhereUniqueWithoutCitoyenInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutCitoyenInput | DemandeUpdateManyWithWhereWithoutCitoyenInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type DemandeUncheckedUpdateManyWithoutCitoyenNestedInput = {
    create?: XOR<DemandeCreateWithoutCitoyenInput, DemandeUncheckedCreateWithoutCitoyenInput> | DemandeCreateWithoutCitoyenInput[] | DemandeUncheckedCreateWithoutCitoyenInput[]
    connectOrCreate?: DemandeCreateOrConnectWithoutCitoyenInput | DemandeCreateOrConnectWithoutCitoyenInput[]
    upsert?: DemandeUpsertWithWhereUniqueWithoutCitoyenInput | DemandeUpsertWithWhereUniqueWithoutCitoyenInput[]
    createMany?: DemandeCreateManyCitoyenInputEnvelope
    set?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    disconnect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    delete?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    connect?: DemandeWhereUniqueInput | DemandeWhereUniqueInput[]
    update?: DemandeUpdateWithWhereUniqueWithoutCitoyenInput | DemandeUpdateWithWhereUniqueWithoutCitoyenInput[]
    updateMany?: DemandeUpdateManyWithWhereWithoutCitoyenInput | DemandeUpdateManyWithWhereWithoutCitoyenInput[]
    deleteMany?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
  }

  export type CitoyenCreateNestedOneWithoutDemandesInput = {
    create?: XOR<CitoyenCreateWithoutDemandesInput, CitoyenUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: CitoyenCreateOrConnectWithoutDemandesInput
    connect?: CitoyenWhereUniqueInput
  }

  export type PaiementCreateNestedOneWithoutDemandeInput = {
    create?: XOR<PaiementCreateWithoutDemandeInput, PaiementUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutDemandeInput
    connect?: PaiementWhereUniqueInput
  }

  export type Document_ActeCreateNestedOneWithoutDemandeInput = {
    create?: XOR<Document_ActeCreateWithoutDemandeInput, Document_ActeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: Document_ActeCreateOrConnectWithoutDemandeInput
    connect?: Document_ActeWhereUniqueInput
  }

  export type Historique_ModificationsCreateNestedManyWithoutDemandeInput = {
    create?: XOR<Historique_ModificationsCreateWithoutDemandeInput, Historique_ModificationsUncheckedCreateWithoutDemandeInput> | Historique_ModificationsCreateWithoutDemandeInput[] | Historique_ModificationsUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutDemandeInput | Historique_ModificationsCreateOrConnectWithoutDemandeInput[]
    createMany?: Historique_ModificationsCreateManyDemandeInputEnvelope
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
  }

  export type Document_ActeUncheckedCreateNestedOneWithoutDemandeInput = {
    create?: XOR<Document_ActeCreateWithoutDemandeInput, Document_ActeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: Document_ActeCreateOrConnectWithoutDemandeInput
    connect?: Document_ActeWhereUniqueInput
  }

  export type Historique_ModificationsUncheckedCreateNestedManyWithoutDemandeInput = {
    create?: XOR<Historique_ModificationsCreateWithoutDemandeInput, Historique_ModificationsUncheckedCreateWithoutDemandeInput> | Historique_ModificationsCreateWithoutDemandeInput[] | Historique_ModificationsUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutDemandeInput | Historique_ModificationsCreateOrConnectWithoutDemandeInput[]
    createMany?: Historique_ModificationsCreateManyDemandeInputEnvelope
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
  }

  export type EnumTypeActeFieldUpdateOperationsInput = {
    set?: $Enums.TypeActe
  }

  export type EnumStatutDemandeFieldUpdateOperationsInput = {
    set?: $Enums.StatutDemande
  }

  export type EnumDemandePourTierFieldUpdateOperationsInput = {
    set?: $Enums.DemandePourTier
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CitoyenUpdateOneRequiredWithoutDemandesNestedInput = {
    create?: XOR<CitoyenCreateWithoutDemandesInput, CitoyenUncheckedCreateWithoutDemandesInput>
    connectOrCreate?: CitoyenCreateOrConnectWithoutDemandesInput
    upsert?: CitoyenUpsertWithoutDemandesInput
    connect?: CitoyenWhereUniqueInput
    update?: XOR<XOR<CitoyenUpdateToOneWithWhereWithoutDemandesInput, CitoyenUpdateWithoutDemandesInput>, CitoyenUncheckedUpdateWithoutDemandesInput>
  }

  export type PaiementUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<PaiementCreateWithoutDemandeInput, PaiementUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: PaiementCreateOrConnectWithoutDemandeInput
    upsert?: PaiementUpsertWithoutDemandeInput
    disconnect?: PaiementWhereInput | boolean
    delete?: PaiementWhereInput | boolean
    connect?: PaiementWhereUniqueInput
    update?: XOR<XOR<PaiementUpdateToOneWithWhereWithoutDemandeInput, PaiementUpdateWithoutDemandeInput>, PaiementUncheckedUpdateWithoutDemandeInput>
  }

  export type Document_ActeUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<Document_ActeCreateWithoutDemandeInput, Document_ActeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: Document_ActeCreateOrConnectWithoutDemandeInput
    upsert?: Document_ActeUpsertWithoutDemandeInput
    disconnect?: Document_ActeWhereInput | boolean
    delete?: Document_ActeWhereInput | boolean
    connect?: Document_ActeWhereUniqueInput
    update?: XOR<XOR<Document_ActeUpdateToOneWithWhereWithoutDemandeInput, Document_ActeUpdateWithoutDemandeInput>, Document_ActeUncheckedUpdateWithoutDemandeInput>
  }

  export type Historique_ModificationsUpdateManyWithoutDemandeNestedInput = {
    create?: XOR<Historique_ModificationsCreateWithoutDemandeInput, Historique_ModificationsUncheckedCreateWithoutDemandeInput> | Historique_ModificationsCreateWithoutDemandeInput[] | Historique_ModificationsUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutDemandeInput | Historique_ModificationsCreateOrConnectWithoutDemandeInput[]
    upsert?: Historique_ModificationsUpsertWithWhereUniqueWithoutDemandeInput | Historique_ModificationsUpsertWithWhereUniqueWithoutDemandeInput[]
    createMany?: Historique_ModificationsCreateManyDemandeInputEnvelope
    set?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    disconnect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    delete?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    update?: Historique_ModificationsUpdateWithWhereUniqueWithoutDemandeInput | Historique_ModificationsUpdateWithWhereUniqueWithoutDemandeInput[]
    updateMany?: Historique_ModificationsUpdateManyWithWhereWithoutDemandeInput | Historique_ModificationsUpdateManyWithWhereWithoutDemandeInput[]
    deleteMany?: Historique_ModificationsScalarWhereInput | Historique_ModificationsScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type Document_ActeUncheckedUpdateOneWithoutDemandeNestedInput = {
    create?: XOR<Document_ActeCreateWithoutDemandeInput, Document_ActeUncheckedCreateWithoutDemandeInput>
    connectOrCreate?: Document_ActeCreateOrConnectWithoutDemandeInput
    upsert?: Document_ActeUpsertWithoutDemandeInput
    disconnect?: Document_ActeWhereInput | boolean
    delete?: Document_ActeWhereInput | boolean
    connect?: Document_ActeWhereUniqueInput
    update?: XOR<XOR<Document_ActeUpdateToOneWithWhereWithoutDemandeInput, Document_ActeUpdateWithoutDemandeInput>, Document_ActeUncheckedUpdateWithoutDemandeInput>
  }

  export type Historique_ModificationsUncheckedUpdateManyWithoutDemandeNestedInput = {
    create?: XOR<Historique_ModificationsCreateWithoutDemandeInput, Historique_ModificationsUncheckedCreateWithoutDemandeInput> | Historique_ModificationsCreateWithoutDemandeInput[] | Historique_ModificationsUncheckedCreateWithoutDemandeInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutDemandeInput | Historique_ModificationsCreateOrConnectWithoutDemandeInput[]
    upsert?: Historique_ModificationsUpsertWithWhereUniqueWithoutDemandeInput | Historique_ModificationsUpsertWithWhereUniqueWithoutDemandeInput[]
    createMany?: Historique_ModificationsCreateManyDemandeInputEnvelope
    set?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    disconnect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    delete?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    update?: Historique_ModificationsUpdateWithWhereUniqueWithoutDemandeInput | Historique_ModificationsUpdateWithWhereUniqueWithoutDemandeInput[]
    updateMany?: Historique_ModificationsUpdateManyWithWhereWithoutDemandeInput | Historique_ModificationsUpdateManyWithWhereWithoutDemandeInput[]
    deleteMany?: Historique_ModificationsScalarWhereInput | Historique_ModificationsScalarWhereInput[]
  }

  export type DemandeCreateNestedOneWithoutDocumentInput = {
    create?: XOR<DemandeCreateWithoutDocumentInput, DemandeUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutDocumentInput
    connect?: DemandeWhereUniqueInput
  }

  export type AgentCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<AgentCreateWithoutDocumentsInput, AgentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutDocumentsInput
    connect?: AgentWhereUniqueInput
  }

  export type Historique_ModificationsCreateNestedManyWithoutDocumentInput = {
    create?: XOR<Historique_ModificationsCreateWithoutDocumentInput, Historique_ModificationsUncheckedCreateWithoutDocumentInput> | Historique_ModificationsCreateWithoutDocumentInput[] | Historique_ModificationsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutDocumentInput | Historique_ModificationsCreateOrConnectWithoutDocumentInput[]
    createMany?: Historique_ModificationsCreateManyDocumentInputEnvelope
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
  }

  export type Historique_ModificationsUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<Historique_ModificationsCreateWithoutDocumentInput, Historique_ModificationsUncheckedCreateWithoutDocumentInput> | Historique_ModificationsCreateWithoutDocumentInput[] | Historique_ModificationsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutDocumentInput | Historique_ModificationsCreateOrConnectWithoutDocumentInput[]
    createMany?: Historique_ModificationsCreateManyDocumentInputEnvelope
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DemandeUpdateOneRequiredWithoutDocumentNestedInput = {
    create?: XOR<DemandeCreateWithoutDocumentInput, DemandeUncheckedCreateWithoutDocumentInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutDocumentInput
    upsert?: DemandeUpsertWithoutDocumentInput
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutDocumentInput, DemandeUpdateWithoutDocumentInput>, DemandeUncheckedUpdateWithoutDocumentInput>
  }

  export type AgentUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<AgentCreateWithoutDocumentsInput, AgentUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: AgentCreateOrConnectWithoutDocumentsInput
    upsert?: AgentUpsertWithoutDocumentsInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutDocumentsInput, AgentUpdateWithoutDocumentsInput>, AgentUncheckedUpdateWithoutDocumentsInput>
  }

  export type Historique_ModificationsUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<Historique_ModificationsCreateWithoutDocumentInput, Historique_ModificationsUncheckedCreateWithoutDocumentInput> | Historique_ModificationsCreateWithoutDocumentInput[] | Historique_ModificationsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutDocumentInput | Historique_ModificationsCreateOrConnectWithoutDocumentInput[]
    upsert?: Historique_ModificationsUpsertWithWhereUniqueWithoutDocumentInput | Historique_ModificationsUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: Historique_ModificationsCreateManyDocumentInputEnvelope
    set?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    disconnect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    delete?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    update?: Historique_ModificationsUpdateWithWhereUniqueWithoutDocumentInput | Historique_ModificationsUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: Historique_ModificationsUpdateManyWithWhereWithoutDocumentInput | Historique_ModificationsUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: Historique_ModificationsScalarWhereInput | Historique_ModificationsScalarWhereInput[]
  }

  export type Historique_ModificationsUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<Historique_ModificationsCreateWithoutDocumentInput, Historique_ModificationsUncheckedCreateWithoutDocumentInput> | Historique_ModificationsCreateWithoutDocumentInput[] | Historique_ModificationsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutDocumentInput | Historique_ModificationsCreateOrConnectWithoutDocumentInput[]
    upsert?: Historique_ModificationsUpsertWithWhereUniqueWithoutDocumentInput | Historique_ModificationsUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: Historique_ModificationsCreateManyDocumentInputEnvelope
    set?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    disconnect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    delete?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    update?: Historique_ModificationsUpdateWithWhereUniqueWithoutDocumentInput | Historique_ModificationsUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: Historique_ModificationsUpdateManyWithWhereWithoutDocumentInput | Historique_ModificationsUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: Historique_ModificationsScalarWhereInput | Historique_ModificationsScalarWhereInput[]
  }

  export type DemandeCreateNestedOneWithoutPaiementInput = {
    create?: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutPaiementInput
    connect?: DemandeWhereUniqueInput
  }

  export type DemandeUncheckedCreateNestedOneWithoutPaiementInput = {
    create?: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutPaiementInput
    connect?: DemandeWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumModePaiementFieldUpdateOperationsInput = {
    set?: $Enums.ModePaiement
  }

  export type DemandeUpdateOneWithoutPaiementNestedInput = {
    create?: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutPaiementInput
    upsert?: DemandeUpsertWithoutPaiementInput
    disconnect?: DemandeWhereInput | boolean
    delete?: DemandeWhereInput | boolean
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutPaiementInput, DemandeUpdateWithoutPaiementInput>, DemandeUncheckedUpdateWithoutPaiementInput>
  }

  export type DemandeUncheckedUpdateOneWithoutPaiementNestedInput = {
    create?: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutPaiementInput
    upsert?: DemandeUpsertWithoutPaiementInput
    disconnect?: DemandeWhereInput | boolean
    delete?: DemandeWhereInput | boolean
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutPaiementInput, DemandeUpdateWithoutPaiementInput>, DemandeUncheckedUpdateWithoutPaiementInput>
  }

  export type Document_ActeCreateNestedManyWithoutAgentInput = {
    create?: XOR<Document_ActeCreateWithoutAgentInput, Document_ActeUncheckedCreateWithoutAgentInput> | Document_ActeCreateWithoutAgentInput[] | Document_ActeUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: Document_ActeCreateOrConnectWithoutAgentInput | Document_ActeCreateOrConnectWithoutAgentInput[]
    createMany?: Document_ActeCreateManyAgentInputEnvelope
    connect?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
  }

  export type Historique_ModificationsCreateNestedManyWithoutAgentInput = {
    create?: XOR<Historique_ModificationsCreateWithoutAgentInput, Historique_ModificationsUncheckedCreateWithoutAgentInput> | Historique_ModificationsCreateWithoutAgentInput[] | Historique_ModificationsUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutAgentInput | Historique_ModificationsCreateOrConnectWithoutAgentInput[]
    createMany?: Historique_ModificationsCreateManyAgentInputEnvelope
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
  }

  export type Document_ActeUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<Document_ActeCreateWithoutAgentInput, Document_ActeUncheckedCreateWithoutAgentInput> | Document_ActeCreateWithoutAgentInput[] | Document_ActeUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: Document_ActeCreateOrConnectWithoutAgentInput | Document_ActeCreateOrConnectWithoutAgentInput[]
    createMany?: Document_ActeCreateManyAgentInputEnvelope
    connect?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
  }

  export type Historique_ModificationsUncheckedCreateNestedManyWithoutAgentInput = {
    create?: XOR<Historique_ModificationsCreateWithoutAgentInput, Historique_ModificationsUncheckedCreateWithoutAgentInput> | Historique_ModificationsCreateWithoutAgentInput[] | Historique_ModificationsUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutAgentInput | Historique_ModificationsCreateOrConnectWithoutAgentInput[]
    createMany?: Historique_ModificationsCreateManyAgentInputEnvelope
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
  }

  export type EnumRoleAgentFieldUpdateOperationsInput = {
    set?: $Enums.RoleAgent
  }

  export type Document_ActeUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Document_ActeCreateWithoutAgentInput, Document_ActeUncheckedCreateWithoutAgentInput> | Document_ActeCreateWithoutAgentInput[] | Document_ActeUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: Document_ActeCreateOrConnectWithoutAgentInput | Document_ActeCreateOrConnectWithoutAgentInput[]
    upsert?: Document_ActeUpsertWithWhereUniqueWithoutAgentInput | Document_ActeUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: Document_ActeCreateManyAgentInputEnvelope
    set?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
    disconnect?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
    delete?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
    connect?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
    update?: Document_ActeUpdateWithWhereUniqueWithoutAgentInput | Document_ActeUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: Document_ActeUpdateManyWithWhereWithoutAgentInput | Document_ActeUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: Document_ActeScalarWhereInput | Document_ActeScalarWhereInput[]
  }

  export type Historique_ModificationsUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Historique_ModificationsCreateWithoutAgentInput, Historique_ModificationsUncheckedCreateWithoutAgentInput> | Historique_ModificationsCreateWithoutAgentInput[] | Historique_ModificationsUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutAgentInput | Historique_ModificationsCreateOrConnectWithoutAgentInput[]
    upsert?: Historique_ModificationsUpsertWithWhereUniqueWithoutAgentInput | Historique_ModificationsUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: Historique_ModificationsCreateManyAgentInputEnvelope
    set?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    disconnect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    delete?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    update?: Historique_ModificationsUpdateWithWhereUniqueWithoutAgentInput | Historique_ModificationsUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: Historique_ModificationsUpdateManyWithWhereWithoutAgentInput | Historique_ModificationsUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: Historique_ModificationsScalarWhereInput | Historique_ModificationsScalarWhereInput[]
  }

  export type Document_ActeUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Document_ActeCreateWithoutAgentInput, Document_ActeUncheckedCreateWithoutAgentInput> | Document_ActeCreateWithoutAgentInput[] | Document_ActeUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: Document_ActeCreateOrConnectWithoutAgentInput | Document_ActeCreateOrConnectWithoutAgentInput[]
    upsert?: Document_ActeUpsertWithWhereUniqueWithoutAgentInput | Document_ActeUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: Document_ActeCreateManyAgentInputEnvelope
    set?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
    disconnect?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
    delete?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
    connect?: Document_ActeWhereUniqueInput | Document_ActeWhereUniqueInput[]
    update?: Document_ActeUpdateWithWhereUniqueWithoutAgentInput | Document_ActeUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: Document_ActeUpdateManyWithWhereWithoutAgentInput | Document_ActeUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: Document_ActeScalarWhereInput | Document_ActeScalarWhereInput[]
  }

  export type Historique_ModificationsUncheckedUpdateManyWithoutAgentNestedInput = {
    create?: XOR<Historique_ModificationsCreateWithoutAgentInput, Historique_ModificationsUncheckedCreateWithoutAgentInput> | Historique_ModificationsCreateWithoutAgentInput[] | Historique_ModificationsUncheckedCreateWithoutAgentInput[]
    connectOrCreate?: Historique_ModificationsCreateOrConnectWithoutAgentInput | Historique_ModificationsCreateOrConnectWithoutAgentInput[]
    upsert?: Historique_ModificationsUpsertWithWhereUniqueWithoutAgentInput | Historique_ModificationsUpsertWithWhereUniqueWithoutAgentInput[]
    createMany?: Historique_ModificationsCreateManyAgentInputEnvelope
    set?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    disconnect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    delete?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    connect?: Historique_ModificationsWhereUniqueInput | Historique_ModificationsWhereUniqueInput[]
    update?: Historique_ModificationsUpdateWithWhereUniqueWithoutAgentInput | Historique_ModificationsUpdateWithWhereUniqueWithoutAgentInput[]
    updateMany?: Historique_ModificationsUpdateManyWithWhereWithoutAgentInput | Historique_ModificationsUpdateManyWithWhereWithoutAgentInput[]
    deleteMany?: Historique_ModificationsScalarWhereInput | Historique_ModificationsScalarWhereInput[]
  }

  export type AgentCreateNestedOneWithoutHistoriquesInput = {
    create?: XOR<AgentCreateWithoutHistoriquesInput, AgentUncheckedCreateWithoutHistoriquesInput>
    connectOrCreate?: AgentCreateOrConnectWithoutHistoriquesInput
    connect?: AgentWhereUniqueInput
  }

  export type DemandeCreateNestedOneWithoutHistoriqueInput = {
    create?: XOR<DemandeCreateWithoutHistoriqueInput, DemandeUncheckedCreateWithoutHistoriqueInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutHistoriqueInput
    connect?: DemandeWhereUniqueInput
  }

  export type Document_ActeCreateNestedOneWithoutHistoriqueInput = {
    create?: XOR<Document_ActeCreateWithoutHistoriqueInput, Document_ActeUncheckedCreateWithoutHistoriqueInput>
    connectOrCreate?: Document_ActeCreateOrConnectWithoutHistoriqueInput
    connect?: Document_ActeWhereUniqueInput
  }

  export type EnumTypeEntiteFieldUpdateOperationsInput = {
    set?: $Enums.TypeEntite
  }

  export type AgentUpdateOneRequiredWithoutHistoriquesNestedInput = {
    create?: XOR<AgentCreateWithoutHistoriquesInput, AgentUncheckedCreateWithoutHistoriquesInput>
    connectOrCreate?: AgentCreateOrConnectWithoutHistoriquesInput
    upsert?: AgentUpsertWithoutHistoriquesInput
    connect?: AgentWhereUniqueInput
    update?: XOR<XOR<AgentUpdateToOneWithWhereWithoutHistoriquesInput, AgentUpdateWithoutHistoriquesInput>, AgentUncheckedUpdateWithoutHistoriquesInput>
  }

  export type DemandeUpdateOneWithoutHistoriqueNestedInput = {
    create?: XOR<DemandeCreateWithoutHistoriqueInput, DemandeUncheckedCreateWithoutHistoriqueInput>
    connectOrCreate?: DemandeCreateOrConnectWithoutHistoriqueInput
    upsert?: DemandeUpsertWithoutHistoriqueInput
    disconnect?: DemandeWhereInput | boolean
    delete?: DemandeWhereInput | boolean
    connect?: DemandeWhereUniqueInput
    update?: XOR<XOR<DemandeUpdateToOneWithWhereWithoutHistoriqueInput, DemandeUpdateWithoutHistoriqueInput>, DemandeUncheckedUpdateWithoutHistoriqueInput>
  }

  export type Document_ActeUpdateOneWithoutHistoriqueNestedInput = {
    create?: XOR<Document_ActeCreateWithoutHistoriqueInput, Document_ActeUncheckedCreateWithoutHistoriqueInput>
    connectOrCreate?: Document_ActeCreateOrConnectWithoutHistoriqueInput
    upsert?: Document_ActeUpsertWithoutHistoriqueInput
    disconnect?: Document_ActeWhereInput | boolean
    delete?: Document_ActeWhereInput | boolean
    connect?: Document_ActeWhereUniqueInput
    update?: XOR<XOR<Document_ActeUpdateToOneWithWhereWithoutHistoriqueInput, Document_ActeUpdateWithoutHistoriqueInput>, Document_ActeUncheckedUpdateWithoutHistoriqueInput>
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumTypeActeFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeActe | EnumTypeActeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeActe[] | ListEnumTypeActeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeActe[] | ListEnumTypeActeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeActeFilter<$PrismaModel> | $Enums.TypeActe
  }

  export type NestedEnumStatutDemandeFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeFilter<$PrismaModel> | $Enums.StatutDemande
  }

  export type NestedEnumDemandePourTierFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandePourTier | EnumDemandePourTierFieldRefInput<$PrismaModel>
    in?: $Enums.DemandePourTier[] | ListEnumDemandePourTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandePourTier[] | ListEnumDemandePourTierFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandePourTierFilter<$PrismaModel> | $Enums.DemandePourTier
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTypeActeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeActe | EnumTypeActeFieldRefInput<$PrismaModel>
    in?: $Enums.TypeActe[] | ListEnumTypeActeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeActe[] | ListEnumTypeActeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeActeWithAggregatesFilter<$PrismaModel> | $Enums.TypeActe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeActeFilter<$PrismaModel>
    _max?: NestedEnumTypeActeFilter<$PrismaModel>
  }

  export type NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutDemande | EnumStatutDemandeFieldRefInput<$PrismaModel>
    in?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutDemande[] | ListEnumStatutDemandeFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutDemandeWithAggregatesFilter<$PrismaModel> | $Enums.StatutDemande
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutDemandeFilter<$PrismaModel>
    _max?: NestedEnumStatutDemandeFilter<$PrismaModel>
  }

  export type NestedEnumDemandePourTierWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DemandePourTier | EnumDemandePourTierFieldRefInput<$PrismaModel>
    in?: $Enums.DemandePourTier[] | ListEnumDemandePourTierFieldRefInput<$PrismaModel>
    notIn?: $Enums.DemandePourTier[] | ListEnumDemandePourTierFieldRefInput<$PrismaModel>
    not?: NestedEnumDemandePourTierWithAggregatesFilter<$PrismaModel> | $Enums.DemandePourTier
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDemandePourTierFilter<$PrismaModel>
    _max?: NestedEnumDemandePourTierFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumModePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[] | ListEnumModePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModePaiement[] | ListEnumModePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumModePaiementFilter<$PrismaModel> | $Enums.ModePaiement
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumModePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ModePaiement | EnumModePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.ModePaiement[] | ListEnumModePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.ModePaiement[] | ListEnumModePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumModePaiementWithAggregatesFilter<$PrismaModel> | $Enums.ModePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumModePaiementFilter<$PrismaModel>
    _max?: NestedEnumModePaiementFilter<$PrismaModel>
  }

  export type NestedEnumRoleAgentFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleAgent | EnumRoleAgentFieldRefInput<$PrismaModel>
    in?: $Enums.RoleAgent[] | ListEnumRoleAgentFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleAgent[] | ListEnumRoleAgentFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleAgentFilter<$PrismaModel> | $Enums.RoleAgent
  }

  export type NestedEnumRoleAgentWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleAgent | EnumRoleAgentFieldRefInput<$PrismaModel>
    in?: $Enums.RoleAgent[] | ListEnumRoleAgentFieldRefInput<$PrismaModel>
    notIn?: $Enums.RoleAgent[] | ListEnumRoleAgentFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleAgentWithAggregatesFilter<$PrismaModel> | $Enums.RoleAgent
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleAgentFilter<$PrismaModel>
    _max?: NestedEnumRoleAgentFilter<$PrismaModel>
  }

  export type NestedEnumTypeEntiteFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEntite | EnumTypeEntiteFieldRefInput<$PrismaModel>
    in?: $Enums.TypeEntite[] | ListEnumTypeEntiteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeEntite[] | ListEnumTypeEntiteFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeEntiteFilter<$PrismaModel> | $Enums.TypeEntite
  }

  export type NestedEnumTypeEntiteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeEntite | EnumTypeEntiteFieldRefInput<$PrismaModel>
    in?: $Enums.TypeEntite[] | ListEnumTypeEntiteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeEntite[] | ListEnumTypeEntiteFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeEntiteWithAggregatesFilter<$PrismaModel> | $Enums.TypeEntite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeEntiteFilter<$PrismaModel>
    _max?: NestedEnumTypeEntiteFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DemandeCreateWithoutCitoyenInput = {
    ID_Demande?: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    Paiement?: PaiementCreateNestedOneWithoutDemandeInput
    Document?: Document_ActeCreateNestedOneWithoutDemandeInput
    Historique?: Historique_ModificationsCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutCitoyenInput = {
    ID_Demande?: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    ID_Paiement?: string | null
    Document?: Document_ActeUncheckedCreateNestedOneWithoutDemandeInput
    Historique?: Historique_ModificationsUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutCitoyenInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutCitoyenInput, DemandeUncheckedCreateWithoutCitoyenInput>
  }

  export type DemandeCreateManyCitoyenInputEnvelope = {
    data: DemandeCreateManyCitoyenInput | DemandeCreateManyCitoyenInput[]
    skipDuplicates?: boolean
  }

  export type DemandeUpsertWithWhereUniqueWithoutCitoyenInput = {
    where: DemandeWhereUniqueInput
    update: XOR<DemandeUpdateWithoutCitoyenInput, DemandeUncheckedUpdateWithoutCitoyenInput>
    create: XOR<DemandeCreateWithoutCitoyenInput, DemandeUncheckedCreateWithoutCitoyenInput>
  }

  export type DemandeUpdateWithWhereUniqueWithoutCitoyenInput = {
    where: DemandeWhereUniqueInput
    data: XOR<DemandeUpdateWithoutCitoyenInput, DemandeUncheckedUpdateWithoutCitoyenInput>
  }

  export type DemandeUpdateManyWithWhereWithoutCitoyenInput = {
    where: DemandeScalarWhereInput
    data: XOR<DemandeUpdateManyMutationInput, DemandeUncheckedUpdateManyWithoutCitoyenInput>
  }

  export type DemandeScalarWhereInput = {
    AND?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    OR?: DemandeScalarWhereInput[]
    NOT?: DemandeScalarWhereInput | DemandeScalarWhereInput[]
    ID_Demande?: StringFilter<"Demande"> | string
    ID_Citoyen?: StringFilter<"Demande"> | string
    TypeActe?: EnumTypeActeFilter<"Demande"> | $Enums.TypeActe
    NumeroActe?: StringFilter<"Demande"> | string
    Nom?: StringFilter<"Demande"> | string
    Prenom?: StringFilter<"Demande"> | string
    Statut?: EnumStatutDemandeFilter<"Demande"> | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFilter<"Demande"> | $Enums.DemandePourTier
    DateDemande?: DateTimeFilter<"Demande"> | Date | string
    DateActe?: DateTimeNullableFilter<"Demande"> | Date | string | null
    ID_Paiement?: StringNullableFilter<"Demande"> | string | null
  }

  export type CitoyenCreateWithoutDemandesInput = {
    ID_Citoyen?: string
    Nom: string
    Prenom: string
    DateNaissance: Date | string
    LieuNaissance: string
    Adresse: string
    Email: string
    Telephone: string
    Password: string
  }

  export type CitoyenUncheckedCreateWithoutDemandesInput = {
    ID_Citoyen?: string
    Nom: string
    Prenom: string
    DateNaissance: Date | string
    LieuNaissance: string
    Adresse: string
    Email: string
    Telephone: string
    Password: string
  }

  export type CitoyenCreateOrConnectWithoutDemandesInput = {
    where: CitoyenWhereUniqueInput
    create: XOR<CitoyenCreateWithoutDemandesInput, CitoyenUncheckedCreateWithoutDemandesInput>
  }

  export type PaiementCreateWithoutDemandeInput = {
    ID_Paiement?: string
    Montant: Decimal | DecimalJsLike | number | string
    ModePaiement: $Enums.ModePaiement
    DatePaiement: Date | string
    Transaction_ID: string
  }

  export type PaiementUncheckedCreateWithoutDemandeInput = {
    ID_Paiement?: string
    Montant: Decimal | DecimalJsLike | number | string
    ModePaiement: $Enums.ModePaiement
    DatePaiement: Date | string
    Transaction_ID: string
  }

  export type PaiementCreateOrConnectWithoutDemandeInput = {
    where: PaiementWhereUniqueInput
    create: XOR<PaiementCreateWithoutDemandeInput, PaiementUncheckedCreateWithoutDemandeInput>
  }

  export type Document_ActeCreateWithoutDemandeInput = {
    ID_Document_Acte?: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
    Agent: AgentCreateNestedOneWithoutDocumentsInput
    Historique?: Historique_ModificationsCreateNestedManyWithoutDocumentInput
  }

  export type Document_ActeUncheckedCreateWithoutDemandeInput = {
    ID_Document_Acte?: string
    ID_Agent: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
    Historique?: Historique_ModificationsUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type Document_ActeCreateOrConnectWithoutDemandeInput = {
    where: Document_ActeWhereUniqueInput
    create: XOR<Document_ActeCreateWithoutDemandeInput, Document_ActeUncheckedCreateWithoutDemandeInput>
  }

  export type Historique_ModificationsCreateWithoutDemandeInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
    Agent: AgentCreateNestedOneWithoutHistoriquesInput
    Document?: Document_ActeCreateNestedOneWithoutHistoriqueInput
  }

  export type Historique_ModificationsUncheckedCreateWithoutDemandeInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    ID_Agent: string
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
  }

  export type Historique_ModificationsCreateOrConnectWithoutDemandeInput = {
    where: Historique_ModificationsWhereUniqueInput
    create: XOR<Historique_ModificationsCreateWithoutDemandeInput, Historique_ModificationsUncheckedCreateWithoutDemandeInput>
  }

  export type Historique_ModificationsCreateManyDemandeInputEnvelope = {
    data: Historique_ModificationsCreateManyDemandeInput | Historique_ModificationsCreateManyDemandeInput[]
    skipDuplicates?: boolean
  }

  export type CitoyenUpsertWithoutDemandesInput = {
    update: XOR<CitoyenUpdateWithoutDemandesInput, CitoyenUncheckedUpdateWithoutDemandesInput>
    create: XOR<CitoyenCreateWithoutDemandesInput, CitoyenUncheckedCreateWithoutDemandesInput>
    where?: CitoyenWhereInput
  }

  export type CitoyenUpdateToOneWithWhereWithoutDemandesInput = {
    where?: CitoyenWhereInput
    data: XOR<CitoyenUpdateWithoutDemandesInput, CitoyenUncheckedUpdateWithoutDemandesInput>
  }

  export type CitoyenUpdateWithoutDemandesInput = {
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    DateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    LieuNaissance?: StringFieldUpdateOperationsInput | string
    Adresse?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telephone?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type CitoyenUncheckedUpdateWithoutDemandesInput = {
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    DateNaissance?: DateTimeFieldUpdateOperationsInput | Date | string
    LieuNaissance?: StringFieldUpdateOperationsInput | string
    Adresse?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Telephone?: StringFieldUpdateOperationsInput | string
    Password?: StringFieldUpdateOperationsInput | string
  }

  export type PaiementUpsertWithoutDemandeInput = {
    update: XOR<PaiementUpdateWithoutDemandeInput, PaiementUncheckedUpdateWithoutDemandeInput>
    create: XOR<PaiementCreateWithoutDemandeInput, PaiementUncheckedCreateWithoutDemandeInput>
    where?: PaiementWhereInput
  }

  export type PaiementUpdateToOneWithWhereWithoutDemandeInput = {
    where?: PaiementWhereInput
    data: XOR<PaiementUpdateWithoutDemandeInput, PaiementUncheckedUpdateWithoutDemandeInput>
  }

  export type PaiementUpdateWithoutDemandeInput = {
    ID_Paiement?: StringFieldUpdateOperationsInput | string
    Montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ModePaiement?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    DatePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction_ID?: StringFieldUpdateOperationsInput | string
  }

  export type PaiementUncheckedUpdateWithoutDemandeInput = {
    ID_Paiement?: StringFieldUpdateOperationsInput | string
    Montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    ModePaiement?: EnumModePaiementFieldUpdateOperationsInput | $Enums.ModePaiement
    DatePaiement?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction_ID?: StringFieldUpdateOperationsInput | string
  }

  export type Document_ActeUpsertWithoutDemandeInput = {
    update: XOR<Document_ActeUpdateWithoutDemandeInput, Document_ActeUncheckedUpdateWithoutDemandeInput>
    create: XOR<Document_ActeCreateWithoutDemandeInput, Document_ActeUncheckedCreateWithoutDemandeInput>
    where?: Document_ActeWhereInput
  }

  export type Document_ActeUpdateToOneWithWhereWithoutDemandeInput = {
    where?: Document_ActeWhereInput
    data: XOR<Document_ActeUpdateWithoutDemandeInput, Document_ActeUncheckedUpdateWithoutDemandeInput>
  }

  export type Document_ActeUpdateWithoutDemandeInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
    Agent?: AgentUpdateOneRequiredWithoutDocumentsNestedInput
    Historique?: Historique_ModificationsUpdateManyWithoutDocumentNestedInput
  }

  export type Document_ActeUncheckedUpdateWithoutDemandeInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    ID_Agent?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
    Historique?: Historique_ModificationsUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type Historique_ModificationsUpsertWithWhereUniqueWithoutDemandeInput = {
    where: Historique_ModificationsWhereUniqueInput
    update: XOR<Historique_ModificationsUpdateWithoutDemandeInput, Historique_ModificationsUncheckedUpdateWithoutDemandeInput>
    create: XOR<Historique_ModificationsCreateWithoutDemandeInput, Historique_ModificationsUncheckedCreateWithoutDemandeInput>
  }

  export type Historique_ModificationsUpdateWithWhereUniqueWithoutDemandeInput = {
    where: Historique_ModificationsWhereUniqueInput
    data: XOR<Historique_ModificationsUpdateWithoutDemandeInput, Historique_ModificationsUncheckedUpdateWithoutDemandeInput>
  }

  export type Historique_ModificationsUpdateManyWithWhereWithoutDemandeInput = {
    where: Historique_ModificationsScalarWhereInput
    data: XOR<Historique_ModificationsUpdateManyMutationInput, Historique_ModificationsUncheckedUpdateManyWithoutDemandeInput>
  }

  export type Historique_ModificationsScalarWhereInput = {
    AND?: Historique_ModificationsScalarWhereInput | Historique_ModificationsScalarWhereInput[]
    OR?: Historique_ModificationsScalarWhereInput[]
    NOT?: Historique_ModificationsScalarWhereInput | Historique_ModificationsScalarWhereInput[]
    ID_Historique?: StringFilter<"Historique_Modifications"> | string
    TypeEntite?: EnumTypeEntiteFilter<"Historique_Modifications"> | $Enums.TypeEntite
    ID_Entite?: StringFilter<"Historique_Modifications"> | string
    ID_Agent?: StringFilter<"Historique_Modifications"> | string
    Action?: StringFilter<"Historique_Modifications"> | string
    DateModification?: DateTimeFilter<"Historique_Modifications"> | Date | string
    Ancienne_Valeur?: StringFilter<"Historique_Modifications"> | string
    Nouvelle_Valeur?: StringFilter<"Historique_Modifications"> | string
  }

  export type DemandeCreateWithoutDocumentInput = {
    ID_Demande?: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    Citoyen: CitoyenCreateNestedOneWithoutDemandesInput
    Paiement?: PaiementCreateNestedOneWithoutDemandeInput
    Historique?: Historique_ModificationsCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutDocumentInput = {
    ID_Demande?: string
    ID_Citoyen: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    ID_Paiement?: string | null
    Historique?: Historique_ModificationsUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutDocumentInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutDocumentInput, DemandeUncheckedCreateWithoutDocumentInput>
  }

  export type AgentCreateWithoutDocumentsInput = {
    ID_Agent?: string
    Nom: string
    Prenom: string
    Email: string
    Role: $Enums.RoleAgent
    Password: string
    Historiques?: Historique_ModificationsCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutDocumentsInput = {
    ID_Agent?: string
    Nom: string
    Prenom: string
    Email: string
    Role: $Enums.RoleAgent
    Password: string
    Historiques?: Historique_ModificationsUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutDocumentsInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutDocumentsInput, AgentUncheckedCreateWithoutDocumentsInput>
  }

  export type Historique_ModificationsCreateWithoutDocumentInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
    Agent: AgentCreateNestedOneWithoutHistoriquesInput
    Demande?: DemandeCreateNestedOneWithoutHistoriqueInput
  }

  export type Historique_ModificationsUncheckedCreateWithoutDocumentInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    ID_Agent: string
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
  }

  export type Historique_ModificationsCreateOrConnectWithoutDocumentInput = {
    where: Historique_ModificationsWhereUniqueInput
    create: XOR<Historique_ModificationsCreateWithoutDocumentInput, Historique_ModificationsUncheckedCreateWithoutDocumentInput>
  }

  export type Historique_ModificationsCreateManyDocumentInputEnvelope = {
    data: Historique_ModificationsCreateManyDocumentInput | Historique_ModificationsCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type DemandeUpsertWithoutDocumentInput = {
    update: XOR<DemandeUpdateWithoutDocumentInput, DemandeUncheckedUpdateWithoutDocumentInput>
    create: XOR<DemandeCreateWithoutDocumentInput, DemandeUncheckedCreateWithoutDocumentInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutDocumentInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutDocumentInput, DemandeUncheckedUpdateWithoutDocumentInput>
  }

  export type DemandeUpdateWithoutDocumentInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Citoyen?: CitoyenUpdateOneRequiredWithoutDemandesNestedInput
    Paiement?: PaiementUpdateOneWithoutDemandeNestedInput
    Historique?: Historique_ModificationsUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutDocumentInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_Paiement?: NullableStringFieldUpdateOperationsInput | string | null
    Historique?: Historique_ModificationsUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type AgentUpsertWithoutDocumentsInput = {
    update: XOR<AgentUpdateWithoutDocumentsInput, AgentUncheckedUpdateWithoutDocumentsInput>
    create: XOR<AgentCreateWithoutDocumentsInput, AgentUncheckedCreateWithoutDocumentsInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutDocumentsInput, AgentUncheckedUpdateWithoutDocumentsInput>
  }

  export type AgentUpdateWithoutDocumentsInput = {
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleAgentFieldUpdateOperationsInput | $Enums.RoleAgent
    Password?: StringFieldUpdateOperationsInput | string
    Historiques?: Historique_ModificationsUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutDocumentsInput = {
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleAgentFieldUpdateOperationsInput | $Enums.RoleAgent
    Password?: StringFieldUpdateOperationsInput | string
    Historiques?: Historique_ModificationsUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type Historique_ModificationsUpsertWithWhereUniqueWithoutDocumentInput = {
    where: Historique_ModificationsWhereUniqueInput
    update: XOR<Historique_ModificationsUpdateWithoutDocumentInput, Historique_ModificationsUncheckedUpdateWithoutDocumentInput>
    create: XOR<Historique_ModificationsCreateWithoutDocumentInput, Historique_ModificationsUncheckedCreateWithoutDocumentInput>
  }

  export type Historique_ModificationsUpdateWithWhereUniqueWithoutDocumentInput = {
    where: Historique_ModificationsWhereUniqueInput
    data: XOR<Historique_ModificationsUpdateWithoutDocumentInput, Historique_ModificationsUncheckedUpdateWithoutDocumentInput>
  }

  export type Historique_ModificationsUpdateManyWithWhereWithoutDocumentInput = {
    where: Historique_ModificationsScalarWhereInput
    data: XOR<Historique_ModificationsUpdateManyMutationInput, Historique_ModificationsUncheckedUpdateManyWithoutDocumentInput>
  }

  export type DemandeCreateWithoutPaiementInput = {
    ID_Demande?: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    Citoyen: CitoyenCreateNestedOneWithoutDemandesInput
    Document?: Document_ActeCreateNestedOneWithoutDemandeInput
    Historique?: Historique_ModificationsCreateNestedManyWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutPaiementInput = {
    ID_Demande?: string
    ID_Citoyen: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    Document?: Document_ActeUncheckedCreateNestedOneWithoutDemandeInput
    Historique?: Historique_ModificationsUncheckedCreateNestedManyWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutPaiementInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput>
  }

  export type DemandeUpsertWithoutPaiementInput = {
    update: XOR<DemandeUpdateWithoutPaiementInput, DemandeUncheckedUpdateWithoutPaiementInput>
    create: XOR<DemandeCreateWithoutPaiementInput, DemandeUncheckedCreateWithoutPaiementInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutPaiementInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutPaiementInput, DemandeUncheckedUpdateWithoutPaiementInput>
  }

  export type DemandeUpdateWithoutPaiementInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Citoyen?: CitoyenUpdateOneRequiredWithoutDemandesNestedInput
    Document?: Document_ActeUpdateOneWithoutDemandeNestedInput
    Historique?: Historique_ModificationsUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutPaiementInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Document?: Document_ActeUncheckedUpdateOneWithoutDemandeNestedInput
    Historique?: Historique_ModificationsUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type Document_ActeCreateWithoutAgentInput = {
    ID_Document_Acte?: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
    Demande: DemandeCreateNestedOneWithoutDocumentInput
    Historique?: Historique_ModificationsCreateNestedManyWithoutDocumentInput
  }

  export type Document_ActeUncheckedCreateWithoutAgentInput = {
    ID_Document_Acte?: string
    ID_Demande: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
    Historique?: Historique_ModificationsUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type Document_ActeCreateOrConnectWithoutAgentInput = {
    where: Document_ActeWhereUniqueInput
    create: XOR<Document_ActeCreateWithoutAgentInput, Document_ActeUncheckedCreateWithoutAgentInput>
  }

  export type Document_ActeCreateManyAgentInputEnvelope = {
    data: Document_ActeCreateManyAgentInput | Document_ActeCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type Historique_ModificationsCreateWithoutAgentInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
    Demande?: DemandeCreateNestedOneWithoutHistoriqueInput
    Document?: Document_ActeCreateNestedOneWithoutHistoriqueInput
  }

  export type Historique_ModificationsUncheckedCreateWithoutAgentInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    ID_Entite: string
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
  }

  export type Historique_ModificationsCreateOrConnectWithoutAgentInput = {
    where: Historique_ModificationsWhereUniqueInput
    create: XOR<Historique_ModificationsCreateWithoutAgentInput, Historique_ModificationsUncheckedCreateWithoutAgentInput>
  }

  export type Historique_ModificationsCreateManyAgentInputEnvelope = {
    data: Historique_ModificationsCreateManyAgentInput | Historique_ModificationsCreateManyAgentInput[]
    skipDuplicates?: boolean
  }

  export type Document_ActeUpsertWithWhereUniqueWithoutAgentInput = {
    where: Document_ActeWhereUniqueInput
    update: XOR<Document_ActeUpdateWithoutAgentInput, Document_ActeUncheckedUpdateWithoutAgentInput>
    create: XOR<Document_ActeCreateWithoutAgentInput, Document_ActeUncheckedCreateWithoutAgentInput>
  }

  export type Document_ActeUpdateWithWhereUniqueWithoutAgentInput = {
    where: Document_ActeWhereUniqueInput
    data: XOR<Document_ActeUpdateWithoutAgentInput, Document_ActeUncheckedUpdateWithoutAgentInput>
  }

  export type Document_ActeUpdateManyWithWhereWithoutAgentInput = {
    where: Document_ActeScalarWhereInput
    data: XOR<Document_ActeUpdateManyMutationInput, Document_ActeUncheckedUpdateManyWithoutAgentInput>
  }

  export type Document_ActeScalarWhereInput = {
    AND?: Document_ActeScalarWhereInput | Document_ActeScalarWhereInput[]
    OR?: Document_ActeScalarWhereInput[]
    NOT?: Document_ActeScalarWhereInput | Document_ActeScalarWhereInput[]
    ID_Document_Acte?: StringFilter<"Document_Acte"> | string
    ID_Demande?: StringFilter<"Document_Acte"> | string
    ID_Agent?: StringFilter<"Document_Acte"> | string
    DateDelivrance?: DateTimeFilter<"Document_Acte"> | Date | string
    Fichier_PDF?: StringFilter<"Document_Acte"> | string
    SignatureNumerique?: StringFilter<"Document_Acte"> | string
    EstArchive?: BoolFilter<"Document_Acte"> | boolean
    DateArchivage?: DateTimeFilter<"Document_Acte"> | Date | string
  }

  export type Historique_ModificationsUpsertWithWhereUniqueWithoutAgentInput = {
    where: Historique_ModificationsWhereUniqueInput
    update: XOR<Historique_ModificationsUpdateWithoutAgentInput, Historique_ModificationsUncheckedUpdateWithoutAgentInput>
    create: XOR<Historique_ModificationsCreateWithoutAgentInput, Historique_ModificationsUncheckedCreateWithoutAgentInput>
  }

  export type Historique_ModificationsUpdateWithWhereUniqueWithoutAgentInput = {
    where: Historique_ModificationsWhereUniqueInput
    data: XOR<Historique_ModificationsUpdateWithoutAgentInput, Historique_ModificationsUncheckedUpdateWithoutAgentInput>
  }

  export type Historique_ModificationsUpdateManyWithWhereWithoutAgentInput = {
    where: Historique_ModificationsScalarWhereInput
    data: XOR<Historique_ModificationsUpdateManyMutationInput, Historique_ModificationsUncheckedUpdateManyWithoutAgentInput>
  }

  export type AgentCreateWithoutHistoriquesInput = {
    ID_Agent?: string
    Nom: string
    Prenom: string
    Email: string
    Role: $Enums.RoleAgent
    Password: string
    Documents?: Document_ActeCreateNestedManyWithoutAgentInput
  }

  export type AgentUncheckedCreateWithoutHistoriquesInput = {
    ID_Agent?: string
    Nom: string
    Prenom: string
    Email: string
    Role: $Enums.RoleAgent
    Password: string
    Documents?: Document_ActeUncheckedCreateNestedManyWithoutAgentInput
  }

  export type AgentCreateOrConnectWithoutHistoriquesInput = {
    where: AgentWhereUniqueInput
    create: XOR<AgentCreateWithoutHistoriquesInput, AgentUncheckedCreateWithoutHistoriquesInput>
  }

  export type DemandeCreateWithoutHistoriqueInput = {
    ID_Demande?: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    Citoyen: CitoyenCreateNestedOneWithoutDemandesInput
    Paiement?: PaiementCreateNestedOneWithoutDemandeInput
    Document?: Document_ActeCreateNestedOneWithoutDemandeInput
  }

  export type DemandeUncheckedCreateWithoutHistoriqueInput = {
    ID_Demande?: string
    ID_Citoyen: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    ID_Paiement?: string | null
    Document?: Document_ActeUncheckedCreateNestedOneWithoutDemandeInput
  }

  export type DemandeCreateOrConnectWithoutHistoriqueInput = {
    where: DemandeWhereUniqueInput
    create: XOR<DemandeCreateWithoutHistoriqueInput, DemandeUncheckedCreateWithoutHistoriqueInput>
  }

  export type Document_ActeCreateWithoutHistoriqueInput = {
    ID_Document_Acte?: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
    Demande: DemandeCreateNestedOneWithoutDocumentInput
    Agent: AgentCreateNestedOneWithoutDocumentsInput
  }

  export type Document_ActeUncheckedCreateWithoutHistoriqueInput = {
    ID_Document_Acte?: string
    ID_Demande: string
    ID_Agent: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
  }

  export type Document_ActeCreateOrConnectWithoutHistoriqueInput = {
    where: Document_ActeWhereUniqueInput
    create: XOR<Document_ActeCreateWithoutHistoriqueInput, Document_ActeUncheckedCreateWithoutHistoriqueInput>
  }

  export type AgentUpsertWithoutHistoriquesInput = {
    update: XOR<AgentUpdateWithoutHistoriquesInput, AgentUncheckedUpdateWithoutHistoriquesInput>
    create: XOR<AgentCreateWithoutHistoriquesInput, AgentUncheckedCreateWithoutHistoriquesInput>
    where?: AgentWhereInput
  }

  export type AgentUpdateToOneWithWhereWithoutHistoriquesInput = {
    where?: AgentWhereInput
    data: XOR<AgentUpdateWithoutHistoriquesInput, AgentUncheckedUpdateWithoutHistoriquesInput>
  }

  export type AgentUpdateWithoutHistoriquesInput = {
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleAgentFieldUpdateOperationsInput | $Enums.RoleAgent
    Password?: StringFieldUpdateOperationsInput | string
    Documents?: Document_ActeUpdateManyWithoutAgentNestedInput
  }

  export type AgentUncheckedUpdateWithoutHistoriquesInput = {
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Email?: StringFieldUpdateOperationsInput | string
    Role?: EnumRoleAgentFieldUpdateOperationsInput | $Enums.RoleAgent
    Password?: StringFieldUpdateOperationsInput | string
    Documents?: Document_ActeUncheckedUpdateManyWithoutAgentNestedInput
  }

  export type DemandeUpsertWithoutHistoriqueInput = {
    update: XOR<DemandeUpdateWithoutHistoriqueInput, DemandeUncheckedUpdateWithoutHistoriqueInput>
    create: XOR<DemandeCreateWithoutHistoriqueInput, DemandeUncheckedCreateWithoutHistoriqueInput>
    where?: DemandeWhereInput
  }

  export type DemandeUpdateToOneWithWhereWithoutHistoriqueInput = {
    where?: DemandeWhereInput
    data: XOR<DemandeUpdateWithoutHistoriqueInput, DemandeUncheckedUpdateWithoutHistoriqueInput>
  }

  export type DemandeUpdateWithoutHistoriqueInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Citoyen?: CitoyenUpdateOneRequiredWithoutDemandesNestedInput
    Paiement?: PaiementUpdateOneWithoutDemandeNestedInput
    Document?: Document_ActeUpdateOneWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutHistoriqueInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    ID_Citoyen?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_Paiement?: NullableStringFieldUpdateOperationsInput | string | null
    Document?: Document_ActeUncheckedUpdateOneWithoutDemandeNestedInput
  }

  export type Document_ActeUpsertWithoutHistoriqueInput = {
    update: XOR<Document_ActeUpdateWithoutHistoriqueInput, Document_ActeUncheckedUpdateWithoutHistoriqueInput>
    create: XOR<Document_ActeCreateWithoutHistoriqueInput, Document_ActeUncheckedCreateWithoutHistoriqueInput>
    where?: Document_ActeWhereInput
  }

  export type Document_ActeUpdateToOneWithWhereWithoutHistoriqueInput = {
    where?: Document_ActeWhereInput
    data: XOR<Document_ActeUpdateWithoutHistoriqueInput, Document_ActeUncheckedUpdateWithoutHistoriqueInput>
  }

  export type Document_ActeUpdateWithoutHistoriqueInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
    Demande?: DemandeUpdateOneRequiredWithoutDocumentNestedInput
    Agent?: AgentUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type Document_ActeUncheckedUpdateWithoutHistoriqueInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    ID_Demande?: StringFieldUpdateOperationsInput | string
    ID_Agent?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DemandeCreateManyCitoyenInput = {
    ID_Demande?: string
    TypeActe: $Enums.TypeActe
    NumeroActe?: string
    Nom?: string
    Prenom?: string
    Statut: $Enums.StatutDemande
    DemandePourTier: $Enums.DemandePourTier
    DateDemande: Date | string
    DateActe?: Date | string | null
    ID_Paiement?: string | null
  }

  export type DemandeUpdateWithoutCitoyenInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Paiement?: PaiementUpdateOneWithoutDemandeNestedInput
    Document?: Document_ActeUpdateOneWithoutDemandeNestedInput
    Historique?: Historique_ModificationsUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateWithoutCitoyenInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_Paiement?: NullableStringFieldUpdateOperationsInput | string | null
    Document?: Document_ActeUncheckedUpdateOneWithoutDemandeNestedInput
    Historique?: Historique_ModificationsUncheckedUpdateManyWithoutDemandeNestedInput
  }

  export type DemandeUncheckedUpdateManyWithoutCitoyenInput = {
    ID_Demande?: StringFieldUpdateOperationsInput | string
    TypeActe?: EnumTypeActeFieldUpdateOperationsInput | $Enums.TypeActe
    NumeroActe?: StringFieldUpdateOperationsInput | string
    Nom?: StringFieldUpdateOperationsInput | string
    Prenom?: StringFieldUpdateOperationsInput | string
    Statut?: EnumStatutDemandeFieldUpdateOperationsInput | $Enums.StatutDemande
    DemandePourTier?: EnumDemandePourTierFieldUpdateOperationsInput | $Enums.DemandePourTier
    DateDemande?: DateTimeFieldUpdateOperationsInput | Date | string
    DateActe?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ID_Paiement?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Historique_ModificationsCreateManyDemandeInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    ID_Agent: string
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
  }

  export type Historique_ModificationsUpdateWithoutDemandeInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
    Agent?: AgentUpdateOneRequiredWithoutHistoriquesNestedInput
    Document?: Document_ActeUpdateOneWithoutHistoriqueNestedInput
  }

  export type Historique_ModificationsUncheckedUpdateWithoutDemandeInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
  }

  export type Historique_ModificationsUncheckedUpdateManyWithoutDemandeInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
  }

  export type Historique_ModificationsCreateManyDocumentInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    ID_Agent: string
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
  }

  export type Historique_ModificationsUpdateWithoutDocumentInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
    Agent?: AgentUpdateOneRequiredWithoutHistoriquesNestedInput
    Demande?: DemandeUpdateOneWithoutHistoriqueNestedInput
  }

  export type Historique_ModificationsUncheckedUpdateWithoutDocumentInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
  }

  export type Historique_ModificationsUncheckedUpdateManyWithoutDocumentInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    ID_Agent?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
  }

  export type Document_ActeCreateManyAgentInput = {
    ID_Document_Acte?: string
    ID_Demande: string
    DateDelivrance: Date | string
    Fichier_PDF: string
    SignatureNumerique: string
    EstArchive: boolean
    DateArchivage: Date | string
  }

  export type Historique_ModificationsCreateManyAgentInput = {
    ID_Historique?: string
    TypeEntite: $Enums.TypeEntite
    ID_Entite: string
    Action: string
    DateModification: Date | string
    Ancienne_Valeur: string
    Nouvelle_Valeur: string
  }

  export type Document_ActeUpdateWithoutAgentInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
    Demande?: DemandeUpdateOneRequiredWithoutDocumentNestedInput
    Historique?: Historique_ModificationsUpdateManyWithoutDocumentNestedInput
  }

  export type Document_ActeUncheckedUpdateWithoutAgentInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    ID_Demande?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
    Historique?: Historique_ModificationsUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type Document_ActeUncheckedUpdateManyWithoutAgentInput = {
    ID_Document_Acte?: StringFieldUpdateOperationsInput | string
    ID_Demande?: StringFieldUpdateOperationsInput | string
    DateDelivrance?: DateTimeFieldUpdateOperationsInput | Date | string
    Fichier_PDF?: StringFieldUpdateOperationsInput | string
    SignatureNumerique?: StringFieldUpdateOperationsInput | string
    EstArchive?: BoolFieldUpdateOperationsInput | boolean
    DateArchivage?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Historique_ModificationsUpdateWithoutAgentInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
    Demande?: DemandeUpdateOneWithoutHistoriqueNestedInput
    Document?: Document_ActeUpdateOneWithoutHistoriqueNestedInput
  }

  export type Historique_ModificationsUncheckedUpdateWithoutAgentInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    ID_Entite?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
  }

  export type Historique_ModificationsUncheckedUpdateManyWithoutAgentInput = {
    ID_Historique?: StringFieldUpdateOperationsInput | string
    TypeEntite?: EnumTypeEntiteFieldUpdateOperationsInput | $Enums.TypeEntite
    ID_Entite?: StringFieldUpdateOperationsInput | string
    Action?: StringFieldUpdateOperationsInput | string
    DateModification?: DateTimeFieldUpdateOperationsInput | Date | string
    Ancienne_Valeur?: StringFieldUpdateOperationsInput | string
    Nouvelle_Valeur?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}