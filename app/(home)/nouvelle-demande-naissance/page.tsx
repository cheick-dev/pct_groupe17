"use client";
import { Suspense } from "react";
import DemandeNaissanceForm from "./demande-naissance-form";
import { Loader } from "@/components/Loader";

const DemandePage = () => {

    return (
        <Suspense fallback={<Loader />}>
            <DemandeNaissanceForm />
        </Suspense>
    );
};

export default DemandePage;
