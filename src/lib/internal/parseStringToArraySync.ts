import { CSVRecord, ParseOptions } from "../common/types.ts";
import { Lexer } from "./Lexer.ts";
import { RecordAssembler } from "./RecordAssembler.ts";

export function parseStringToArraySync<Header extends ReadonlyArray<string>>(
  csv: string,
  options?: ParseOptions<Header>,
): CSVRecord<Header>[] {
  const lexer = new Lexer(options);
  const assembler = new RecordAssembler(options);
  const tokens = lexer.lex(csv);
  return [...assembler.assemble(tokens)];
}
