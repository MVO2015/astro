
sed -e '/<!--INCLUDE clock.svg -->/ {' -e 'r includes/clock.svg' -e 'd' -e '}' templates/index.html > ../index.html
sed -e '/<!--INCLUDE clock.svg -->/ {' -e 'r includes/clock.svg' -e 'd' -e '}' templates/clock.html > ../clock.html