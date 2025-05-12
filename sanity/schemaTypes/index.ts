import { type SchemaTypeDefinition } from "sanity";
import { duoMemberType } from "./duoMemberType";
import { interestingFacts } from "./interestingFacts";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [duoMemberType, interestingFacts],
};
