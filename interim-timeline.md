<!DOCTYPE html>
<html>
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<style>
			/* color variables */
:root {
  --color-primary: #0c1440;
  --color-secondary: #0067f4; /* qoom blue */
  --color-navy: #0c1440;
  --color-blue: #0067f4;
  --color-orange: #F28729;
  --color-red: #E84855;
  --color-yellow: #F7C660;
  --color-green: #4da422;
  --color-purple: #9c3ce9;
  
  --color-gray-10: #f4f6f7;
  --color-gray-50: #ebebeb;
  --color-gray-100: #d7d7d7;
  --color-gray-200: #c2c3c4;
  --color-gray-300: #aeafb0;
  --color-gray-400: #9a9b9c;
  
  --color-blue-10: #e6f0fe;
  --color-blue-50: #cce1fd;
  --color-blue-100: #99c2fa;
  --color-blue-200: #66a3f8;
  --color-blue-300: #3285f6;
  --color-blue-500: #0052c3;
  --color-blue-600: #003d92;
  --color-blue-700: #002961;
  
  --color-secondary-10: #e6f0fe;
  --color-secondary-50: #cce1fd;
  --color-secondary-100: #99c2fa;
  --color-secondary-200: #66a3f8;
  --color-secondary-300: #3285f6;
  --color-secondary-500: #0052c3;
  --color-secondary-600: #003d92;
  --color-secondary-700: #002961;
  
  --color-red-10: #fdedee;
  --color-red-50: #fadadd;
  --color-red-100: #f6b6bb;
  --color-red-200: #f19199;
  --color-red-300: #ed6d77;
  
  --color-light-gray: #F4F6F7;
  --color-light-blue: #D8E6F2;
  
  
  /* text colors for light background */
  --text-dark-high: #212121;
  --text-dark-medium: #666666;
  --text-dark-disabled: #9E9E9E;

  /* text colors for dark background */
  --text-white-high: rgba(255,255,255,1);
  --text-white-medium: rgba(255,255,255,0.6);
  --text-white-disabled: rgba(255,255,255,0.38);
}

body {
	color: var(--text-dark-high);
	font-family: system-ui, sans-serif;
	font-size: 16px;
	font-weight: 300;
	margin:0;
	padding:0;
	text-rendering: optimizelegibility;
	width: 100%;
}

main {
	box-sizing: border-box;
	line-height: 1.25;
	margin: 0 auto 80px;
	max-width: 712px;
	padding: 0 16px;
}
h1,h2,h3,h4,h5,h6 {
	margin-block-start: 2em;
	margin-block-end: 1em;
}
/* title */
h1 {
  font-size: 2em;
  font-weight: 500;
  padding-bottom: 0.5em;
  border-bottom: 1px solid var(--text-dark-high);
}
h2 {
	font-size: 1.5em;
	font-weight: 500;
}
h3 {
	font-size: 1.17em;
	font-weight: 500;
}
h4 {
	font-size: 1em;
	font-weight: 500;
}
h5 {
	font-size: 0.83em;
	font-weight: 500;
}
h6 {
	font-size: 0.67em;
	font-weight: 500;
}

ul, ol {
	padding-inline-start: 18px;
}

ul > ul, ul > ol, ol > ol, ol > ul {
	padding-inline-start: 40px;
}
blockquote > p {
	margin-block-start: 0;
	margin-block-end: 0;
}

a {
	color: var(--color-blue);
}

p {
	hyphens: auto;
	line-height: 1.5;
	margin-block-start: 1.5em;
}
li {
	margin: 8px 0;
}
strong {
	font-weight: 500;
}

blockquote {
	background: var(--color-gray-10);
	border-left: 8px solid var(--text-dark-high);
	margin: 24px 0;
	padding: 16px 24px 16px;
}

hr {
	border:none;
	border-top:solid 1px var(--color-gray-400);
	margin-top: 2rem;
	margin-bottom: 2rem;
}

pre {
	background-color: var(--text-dark-high);
	border-radius: 8px;
	color: #fff;
	overflow: auto;
	padding: 16px 24px;
	tab-size: 2em;
}

code {
	background-color: var(--color-secondary-10);
	border-radius: 4px;
	color: var(--color-secondary);
	font-family: monospace;
	line-height: 20px;
	margin: 0;
	padding: 2px 6px;
	word-wrap: break-word;
}

pre > code {
	background: transparent;
	color: #fff;
	line-height: 1.5;
	padding:0;
}

table {
	border-collapse: collapse;
	margin-top: 32px;
	margin-bottom: 32px;
	padding: 0;
	width: 100%;
}
table tr {
	border-top: 1px solid var(--color-gray-100);
	margin: 0;
	padding: 0;
}
table thead tr {
	border-bottom: 1px solid var(--text-dark-high);
}

table tr th {
	font-weight: 500;
	margin: 0;
	padding: 8px 16px;
	text-align: left;
}
table tbody tr:nth-child(odd) {
	background-color: var(--color-gray-10);
}
table tbody tr:last-child {
	border-bottom: 1px solid var(--color-gray-100);
}
table tr td {
	margin: 0;
	padding: 8px 16px;
	text-align: left;
}

img {
	display: block;
	margin: 2rem 0;
	max-width: 100%;
}

button {
	border: 1px solid var(--color-secondary);
	background-color: var(--color-secondary);
	color: #fff;
	font-size: 16px;
	font-weight: 500;
	padding: 16px;
	border-radius: 0;
}
		</style>
	</head>
	<body>
		<main><h1>Interim Meeting</h1>
<p><strong>Project:</strong> Qoom Scheduling App</p>
<p><strong>Group member(s):</strong> Carissa Tang &amp; Amy Palm</p>
<h2>Timeline</h2>
<table>
<thead>
<tr>
<th style="text-align:left">Date</th>
<th style="text-align:left">Tasks</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">Mar 3</td>
<td style="text-align:left">- Figure out how the scheduler can see the responses of (multiple) users and ensure no scheduling conflicts</td>
</tr>
<tr>
<td style="text-align:left">Mar 10</td>
<td style="text-align:left">End time must occur after start time (partially done) <br> - Revert blue background to white if users select a new start time btn</td>
</tr>
<tr>
<td style="text-align:left">Mar 17</td>
<td style="text-align:left">Form validation <br> - Disable ability to choose a time earlier than the previous (when adding a new start/end time section) <br> - times have to be in format of ##:## PM/AM <br> - cannot choose the same date more than once</td>
</tr>
<tr>
<td style="text-align:left">Mar 24</td>
<td style="text-align:left">^</td>
</tr>
<tr>
<td style="text-align:left">Mar 31</td>
<td style="text-align:left">Debug</td>
</tr>
</tbody>
</table>
<p>other tasks</p>
<ul>
<li>consider timezones</li>
<li>change date format (e.g. to Dec 12, 2020)</li>
</ul>
</main>
	</body>
</html>
