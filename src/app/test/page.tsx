"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import Navbar from "./navbar-test";


export default function Home() {
  return (
    <div>
        <Navbar initialColor="#1b1b1b" scrollColor="#1b1b1b" />
    </div>
  );
}