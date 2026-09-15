export type IconName =
  | "key"
  | "building"
  | "hammer"
  | "shield"
  | "receipt"
  | "gavel";

const paths: Record<IconName, string> = {
  key: "M15 7a4 4 0 1 0-3.9 4.99L4 19v3h3l1-1v-1.5H9.5V18H11v-1.5h1.5L15.01 14A4 4 0 0 0 19 10a4 4 0 0 0-4-3Zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z",
  building:
    "M4 21V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h7a1 1 0 0 1 1 1v11h-2v-2h-2v2h-2v-2h-2v2h-2v-2H9v2H4Zm2-2h1v-2H6v2Zm0-4h1v-2H6v2Zm0-4h1V9H6v2Zm3 8h1v-2H9v2Zm0-4h1v-2H9v2Zm0-4h1V9H9v2Zm3 8h1v-2h-1v2Zm0-4h1v-2h-1v2Zm3-2h1V9h-1v2Zm3 6h1v-2h-1v2Zm0-4h1v-2h-1v2Z",
  hammer:
    "M2 20.5 9 13.6l1.4 1.4-7 6.9L2 20.5Zm7.9-8.1 2.1-2.1 8.4 8.4-2.1 2.1-8.4-8.4Zm2.4-4.5 4.3-4.3 5.6 5.6-4.3 4.3-1.1-1.1 1.7-1.7-1.1-1.1-1.7 1.7-3.4-3.4Z",
  shield:
    "M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm0 2.2 6 2.25V11c0 3.9-2.5 7.4-6 8.8-3.5-1.4-6-4.9-6-8.8V6.45l6-2.25Z",
  receipt:
    "M6 2h12a1 1 0 0 1 1 1v18l-2.5-1.5L14 21l-2-1.5L10 21l-2.5-1.5L5 21V3a1 1 0 0 1 1-1Zm2 5h8V6H8v1Zm0 3h8V9H8v1Zm0 3h5v-1H8v1Z",
  gavel:
    "m14.5 3 6.5 6.5-1.4 1.4-1.1-1.1-3.9 3.9 1.1 1.1-1.4 1.4-1.1-1.1-4.9 4.9H3v-4.3l4.9-4.9-1.1-1.1 1.4-1.4 1.1 1.1 3.9-3.9-1.1-1.1L13.5 2l1 1Zm-3.2 5.3-3.9 3.9 2.1 2.1 3.9-3.9-2.1-2.1Z",
};

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d={paths[name]} />
    </svg>
  );
}
