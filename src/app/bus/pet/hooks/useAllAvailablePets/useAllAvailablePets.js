import {loader} from "graphql.macro";
import {useLazyQuery} from "@apollo/client";

const queryAllAvailablePets = loader("./queryAllAvailablePets.graphql")
export const useAllAvailablePets = () => {
    const [getAllAvailablePets, {loading, error, data}] = useLazyQuery(queryAllAvailablePets);

    return {getAllAvailablePets, loading, error, pets: data && data.allAvailablePets}
}