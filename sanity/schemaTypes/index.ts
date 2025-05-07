import { type SchemaTypeDefinition } from "sanity";
import { duoMemberType } from "./duoMemberType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [duoMemberType],
};
