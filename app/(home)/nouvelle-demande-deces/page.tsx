"use client";
import { Suspense } from "react";
import DemandeDecesForm from "./demande-deces-form";
import { Loader } from "@/components/Loader";

const DemandePage = () => {

    return (
        <Suspense fallback={<Loader />}>
            <DemandeDecesForm />
        </Suspense>
    );
};

export default DemandePage;
