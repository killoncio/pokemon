function renderPortfolioItem(items) {
    let portfolio = '';

    for (let i=0; i < items.length; i++) {
        const {imageName, title, subtitle} = items[i];

        portfolio += `
            <div class="col-lg-4 col-sm-6 mb-4">
                <!-- Portfolio item 1-->
                <div class="portfolio-item">
                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal${i}">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img class="img-fluid" src="assets/img/portfolio/${imageName}.jpg" alt="..." />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${title}</div>
                        <div class="portfolio-caption-subheading text-muted">${subtitle}</div>
                    </div>
                </div>
            </div>
        `;
    }

    return portfolio;
}