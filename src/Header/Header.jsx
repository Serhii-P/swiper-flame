
const Header = () => {
  return (
<div className="top-line">
		<div className="container container-top">
    <div>
				<div className="logo">
					<img src="/logo.svg" alt="Alt" />
				</div>
			</div>
			<div>
				<ul className="main-mnu">
					<li><a href="#">About</a></li>
					<li><a href="#">News</a></li>
					<li><a href="#">Projects</a></li>
					<li><a href="/contacts">Contacts</a></li>
				</ul>
			</div>
		</div>
	</div>  )
}

export default Header