var navLinks = document.getElementsByTagName('a');
var indicators = document.getElementsByClassName('indicator');

for (var i = 0; i < navLinks.length; i++)
{
    indicators[i].classList.add('d-none');
    navLinks[i].style.color = 'rgb(28, 28, 28)';
}

switch (window.location.pathname)
{
    case '/':
        indicators[0].classList.remove('d-none');
        navLinks[0].style.color = 'rgb(130, 80, 223)';
        break;
    case '/about':
        indicators[1].classList.remove('d-none');
        navLinks[1].style.color = 'rgb(130, 80, 223)';
        break;
    case '/skills':
        indicators[2].classList.remove('d-none');
        navLinks[2].style.color = 'rgb(130, 80, 223)';
        break;
    case '/projects':
        indicators[3].classList.remove('d-none');
        navLinks[3].style.color = 'rgb(130, 80, 223)';
        break;
    case '/education':
        indicators[4].classList.remove('d-none');
        navLinks[4].style.color = 'rgb(130, 80, 223)';
        break;
    case '/work':
        indicators[5].classList.remove('d-none');
        navLinks[5].style.color = 'rgb(130, 80, 223)';
        break;
    case '/contact':
        indicators[6].classList.remove('d-none');
        navLinks[6].style.color = 'rgb(130, 80, 223)';
        break;
}