const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images");
const QUALITY = 80;

async function optimizeImages() {
    const files = fs.readdirSync(IMAGES_DIR);

    console.log("🖼️  画像最適化を開始します...\n");

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const basename = path.basename(file, ext);
        const inputPath = path.join(IMAGES_DIR, file);
        const outputPath = path.join(IMAGES_DIR, `${basename}.webp`);

        // jpg, jpeg, png のみ処理
        if (![".jpg", ".jpeg", ".png"].includes(ext)) {
            continue;
        }

        try {
            const inputStats = fs.statSync(inputPath);
            const inputSize = (inputStats.size / 1024).toFixed(1);

            await sharp(inputPath)
                .webp({ quality: QUALITY })
                .toFile(outputPath);

            const outputStats = fs.statSync(outputPath);
            const outputSize = (outputStats.size / 1024).toFixed(1);
            const reduction = (
                (1 - outputStats.size / inputStats.size) *
                100
            ).toFixed(1);

            console.log(`✅ ${file}`);
            console.log(
                `   ${inputSize}KB → ${outputSize}KB (${reduction}% 削減)\n`,
            );
        } catch (error) {
            console.error(`❌ ${file}: ${error.message}\n`);
        }
    }

    console.log("🎉 完了しました！");
}

optimizeImages();
