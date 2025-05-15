import { type SchemaTypeDefinition } from "sanity";
import { albumType } from "./albumType";
import { duoMemberType } from "./duoMemberType";
import { interestingFacts } from "./interestingFacts";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [duoMemberType, interestingFacts, albumType],
};
