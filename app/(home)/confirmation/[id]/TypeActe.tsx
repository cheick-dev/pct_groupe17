import { ActeDeces } from '@/components/ActeDeces';
import { ActeMariage } from '@/components/ActeMariage';
import { ActeNaissance } from '@/components/ActeNaissance';
import { TypeActe } from '@/lib/generated/prisma';


function GetTypeActe({ typeActe, ref, ID_Demande }: { typeActe: TypeActe, ref: any, ID_Demande: string }) {
    switch (typeActe) {
        case "Naissance":
            return <ActeNaissance ref={ref} ID_Demande={ID_Demande} />;
        case "Mariage":
            return <ActeMariage ref={ref} ID_Demande={ID_Demande} />;
        case "Décès":
            return <ActeDeces ref={ref} ID_Demande={ID_Demande} />;
        default:
            return <></>;
    }
}

export default GetTypeActe
