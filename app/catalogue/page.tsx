import { Suspense } from "react";
import CatalogueClient from "./CatalogueClient";

export const dynamic = "force-dynamic";

export default function CataloguePage() {
    return (
        <Suspense fallback={<div className="p-6 text-center">Chargement du catalogue…</div>}>
            <CatalogueClient />
        </Suspense>
    );
}