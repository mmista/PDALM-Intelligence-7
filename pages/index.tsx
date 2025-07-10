
// pages/index.tsx

import React from "react";
import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  UserCheck,
  Settings,
  MessageSquare,
  AlertCircle,
  BarChart3,
  Brain,
  Users,
  SlidersHorizontal,
  ClipboardList,
  Lightbulb,
  Search,
} from "lucide-react";

const Expandable = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="mt-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-sm text-neutral-500 hover:text-orange-500 transition flex items-center gap-2"
      >
        {expanded ? (
          <>
            <ChevronUp className="w-4 h-4" /> Show Less
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" /> Show More
          </>
        )}
      </button>
      {expanded && (
        <div className="mt-4 text-sm leading-relaxed text-neutral-500 space-y-2 max-w-3xl">
          {children}
        </div>
      )}
    </div>
  );
};

const Section = ({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <div className="flex items-center gap-2 mb-4">
      <Icon className="text-orange-500 w-5 h-5" />
      <h2 className="text-xl font-semibold text-neutral-700 tracking-tight">
        {title}
      </h2>
    </div>
    {children}
  </section>
);

const Box = ({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon?: React.ElementType;
}) => (
  <div className="bg-white rounded-2xl shadow-md px-5 py-4 flex items-start gap-4">
    {Icon && <Icon className="text-neutral-400 w-6 h-6 mt-1 flex-shrink-0" />}
    <div>
      <p className="font-semibold text-sm text-neutral-800 leading-tight mb-1">
        {title}
      </p>
      <p className="text-xs text-neutral-500 leading-snug">{description}</p>
    </div>
  </div>
);

export default function FinalExecutiveReport() {
  return (
    <div className="p-8 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-[800px] mx-auto space-y-16">
        {/* Sekcje wstawione wcześniej */}
        <p className="text-neutral-400 text-center">Report content here...</p>
      </div>
    </div>
  );
}
