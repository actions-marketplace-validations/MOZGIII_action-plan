import { spawn } from "child_process";
import { stat } from "fs/promises";
export const ensurePackagesInstalled = async () => {
    const shouldSkipInstall = await nodeModulesExists();
    if (!shouldSkipInstall) {
        await installPackages();
    }
};
export const nodeModulesExists = async () => {
    try {
        await stat("node_modules");
    }
    catch {
        return false;
    }
    return true;
};
export const installPackages = async () => spawnSimple("yarn", ["install", "--immutable", "--immutable-cache"], {
    stdio: "inherit",
    windowsHide: true,
});
const spawnSimple = (command, args, options) => new Promise((resolve, reject) => {
    const child = spawn(command, args, options);
    child.on("error", reject);
    child.on("close", resolve);
});
//# sourceMappingURL=yarn.js.map