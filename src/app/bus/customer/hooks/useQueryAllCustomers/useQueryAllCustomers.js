import { loader } from "graphql.macro";
import { useQuery } from "@apollo/client";

const queryAllCustomers = loader("./queryAllCustomers.graphql");
export const useQueryAllCustomers = () => {
  const { loading, error, data } = useQuery(queryAllCustomers);

  return { loading, error, allCustomers: data && data.allCustomers };
};
