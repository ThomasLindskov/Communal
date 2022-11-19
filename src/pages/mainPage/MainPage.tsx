import React from "react";
import { Card } from "src/components/Card";
import { CardTitle } from "src/components/CardTitle";
import { theme } from "src/theme";

export default function MainPage() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: theme.padding.medium,
      }}
    >
      <Card>
        <CardTitle>Tester</CardTitle>
      </Card>
    </div>
  );
}
