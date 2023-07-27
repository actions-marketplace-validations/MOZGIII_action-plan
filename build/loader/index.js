import { ensurePackagesInstalled } from "./yarn.js";
const main = async () => {
    await ensurePackagesInstalled();
    await import("../main/index.js");
};
main();
//# sourceMappingURL=index.js.map