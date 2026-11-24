import { mkdirSync, writeFileSync } from 'node:fs';

const text = "Eight summers he'd pointed at vanilla; today Danny, knuckles white on the counter, got all of \"pistachio\" out in one go, the queue waiting, and the scooper, not looking up, said, \"Cone or cup?\"";

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', text, 'utf8');
