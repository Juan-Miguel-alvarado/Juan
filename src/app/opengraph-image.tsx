import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { DATA } from "@/data/resume";

export const alt = DATA.name;
export const size = {
    width: 1200,
    height: 630,
};
export const contentType = "image/png";

const BG = "#0d1117";
const BORDER = "#21262d";
const FG = "#e6edf3";
const MUTED = "#8b949e";

// Read from disk rather than fetch(): this renders at build time under the
// Node runtime, where fetching a file:// URL is not implemented.
const getFontData = async () => {
    try {
        const fontDir = join(process.cwd(), "public", "fonts");
        const [cabinetGrotesk, clashDisplay] = await Promise.all([
            readFile(join(fontDir, "CabinetGrotesk-Medium.ttf")),
            readFile(join(fontDir, "ClashDisplay-Semibold.ttf")),
        ]);
        return { cabinetGrotesk, clashDisplay };
    } catch (error) {
        console.error("Failed to load fonts:", error);
        return null;
    }
};

const styles = {
    outer: {
        height: "100%",
        width: "100%",
        display: "flex",
        backgroundColor: BG,
        padding: "48px",
    },
    card: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: `1px solid ${BORDER}`,
        borderRadius: "20px",
        padding: "56px 64px",
    },
    // the same >_ mark as the favicon
    mark: {
        display: "flex",
        alignItems: "center",
    },
    chevron: {
        display: "flex",
        fontFamily: "Clash Display",
        fontSize: "72px",
        lineHeight: 1,
        color: FG,
    },
    cursor: {
        display: "flex",
        width: "36px",
        height: "9px",
        borderRadius: "4px",
        backgroundColor: FG,
        marginLeft: "18px",
        marginTop: "38px",
    },
    body: {
        display: "flex",
        flexDirection: "column",
    },
    title: {
        fontFamily: "Clash Display",
        fontSize: "76px",
        lineHeight: 1.05,
        color: FG,
        letterSpacing: "-0.015em",
        marginBottom: "20px",
    },
    description: {
        fontFamily: "Cabinet Grotesk",
        fontSize: "30px",
        lineHeight: 1.4,
        color: MUTED,
        maxWidth: "820px",
    },
    footer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    stack: {
        display: "flex",
        fontFamily: "Cabinet Grotesk",
        fontSize: "24px",
        color: MUTED,
        letterSpacing: "0.06em",
    },
    domain: {
        display: "flex",
        fontFamily: "Cabinet Grotesk",
        fontSize: "24px",
        color: MUTED,
    },
} as const;

export default async function Image() {
    try {
        const fontData = await getFontData();
        const stack = DATA.skills
            .slice(0, 4)
            .map((s) => s.name)
            .join("  ·  ");
        const domain = DATA.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

        return new ImageResponse(
            (
                <div style={styles.outer}>
                    <div style={styles.card}>
                        <div style={styles.mark}>
                            <div style={styles.chevron}>&gt;</div>
                            <div style={styles.cursor} />
                        </div>

                        <div style={styles.body}>
                            <div style={styles.title}>{DATA.name}</div>
                            <div style={styles.description}>{DATA.description}</div>
                        </div>

                        <div style={styles.footer}>
                            <div style={styles.stack}>{stack}</div>
                            <div style={styles.domain}>{domain}</div>
                        </div>
                    </div>
                </div>
            ),
            {
                ...size,
                fonts: fontData
                    ? [
                        {
                            name: "Cabinet Grotesk",
                            data: fontData.cabinetGrotesk,
                            weight: 400,
                            style: "normal",
                        },
                        {
                            name: "Clash Display",
                            data: fontData.clashDisplay,
                            weight: 600,
                            style: "normal",
                        },
                    ]
                    : undefined,
            }
        );
    } catch (error) {
        console.error("Error generating OpenGraph image:", error);
        return new Response(
            `Failed to generate image: ${error instanceof Error ? error.message : "Unknown error"}`,
            {
                status: 500,
            }
        );
    }
}
