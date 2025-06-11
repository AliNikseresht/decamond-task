"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import buttonStyles from "@/components/Button/Button.module.scss";
import styles from "@/app/dashboard/styles/dashboard.module.scss";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [userImage, setUserImage] = useState("");

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem("user");
    router.push("/auth");
  };

  useEffect(() => {
    const userData = localStorage.getItem("user");

    if (!userData) {
      router.push("/auth");
    } else {
      const user = JSON.parse(userData);
      const fullName = `${user?.name?.first || ""} ${user?.name?.last || ""}`;
      setUserName(fullName.trim());
      setUserImage(user?.picture?.large || "");
    }
  }, [router]);

  return (
    <main className={styles.container}>
      {userImage && (
        <img src={userImage} alt={userName} className={styles.profileImage} />
      )}

      <h1 className={styles.welcomeText}>
        Welcome to the Dashboard{userName && `, ${userName}`}!
      </h1>

      <Button
        label={loading ? "Loading..." : "Logout"}
        onClick={handleLogout}
        disabled={loading}
        className={buttonStyles.red}
        style={{ marginTop: "20px" }}
      />
    </main>
  );
}
