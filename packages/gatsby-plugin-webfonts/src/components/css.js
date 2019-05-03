import React from 'react';

export default function Css({ css }) {
  return <style type="text/css" dangerouslySetInnerHTML={{ __html: css }} />;
}
