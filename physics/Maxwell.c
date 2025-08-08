#define nx 16  // Example dimensions
#define ny 16
#define nz 16

// Declare field arrays
double E[nx][ny][nz];
double B[nx][ny][nz];
double D[nx][ny][nz];
double H[nx][ny][nz];
double J[nx][ny][nz];
double rho[nx][ny][nz];

void Maxwell(int timestep, double epsilon0, double mu0, 
             double dx, double dy, double dz, double dt) {
    for (int t = 0; t < timestep; ++t) {
        // Update electric field E
        for (int i = 1; i < nx - 1; ++i) {
            for (int j = 1; j < ny - 1; ++j) {
                for (int k = 1; k < nz - 1; ++k) {
                    E[i][j][k] += dt * (1.0/epsilon0) * (
                        (D[i+1][j][k] - D[i-1][j][k]) / (2.0*dx) +
                        (D[i][j+1][k] - D[i][j-1][k]) / (2.0*dy) +
                        (D[i][j][k+1] - D[i][j][k-1]) / (2.0*dz)
                    );
                }
            }
        }

        // Update magnetic field B
        for (int i = 1; i < nx - 1; ++i) {
            for (int j = 1; j < ny - 1; ++j) {
                for (int k = 1; k < nz - 1; ++k) {
                    B[i][j][k] += dt * mu0 * (
                        (H[i][j+1][k] - H[i][j-1][k]) / (2.0*dy) -
                        (H[i+1][j][k] - H[i-1][j][k]) / (2.0*dx)
                    ) + dt * J[i][j][k];
                }
            }
        }
    }
}