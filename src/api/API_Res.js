export const API_Res = (res) => {
  return (
    <div>
      <pre>{JSON.stringify(res.res.config, null, 2)}</pre>
    </div>
  );
};
