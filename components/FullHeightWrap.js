export default function FullHeightWrap({ children }) {
  return (
    <body class="flex flex-col min-h-screen ">
      <main class="flex-grow">{children}</main>
    </body>
  );
}
