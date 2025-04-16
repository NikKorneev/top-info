import { type SchemaTypeDefinition } from "sanity";
import { eventType } from "./exampleType";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [eventType],
};
