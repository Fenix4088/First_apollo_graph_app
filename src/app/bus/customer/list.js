import React from "react";
import { useQueryAllCustomers } from "./hooks/useQueryAllCustomers/useQueryAllCustomers";

export const List = () => {
  const { loading, error, allCustomers } = useQueryAllCustomers();

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Username</th>
          <th>Name</th>
          <th>Date of create</th>
        </tr>
      </thead>
      <tbody>
        {allCustomers.map(({ username, name, dateCreated }, i) => (
          <tr key={dateCreated}>
            <td>{i}</td>
            <td>{username}</td>
            <td>{name}</td>
            <td>{formatDate(dateCreated)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};