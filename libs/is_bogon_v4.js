module.exports = function (ip) {
	var ipp = ip.split('.').map(function (part) { return Number(part); });
	return (
		(ipp.length !== 4                                                ) || // 0.0.0.0.0(.0(.0(...)))
		(ipp.some(function (part) { return isNaN(part); })               ) || // 0.a.b.c
		(ipp[0] === 0                                                    ) || // 0.0.0.0/8
		(ipp[0] === 10                                                   ) || // 10.0.0.0/8
		(ipp[0] === 100 && ipp[1] >= 64 && ipp[1] <= 127                 ) || // 100.64.0.0/10
		(ipp[0] === 127                                                  ) || // 127.0.0.0/8
		(ipp[0] === 169 && ipp[1] === 254                                ) || // 169.254.0.0/16
		(ipp[0] === 172 && ipp[1] >= 16 && ipp[1] <= 31                  ) || // 172.16.0.0/12
		(ipp[0] === 192 && ipp[1] === 0 && (ipp[2] === 0 || ipp[2] === 2)) || // 192.0.0.0/24 192.0.2.0/24
		(ipp[0] === 192 && ipp[1] === 168                                ) || // 192.168.0.0/16
		(ipp[0] === 198 && ipp[1] >= 18 && ipp[1] <= 19                  ) || // 198.18.0.0/15
		(ipp[0] === 198 && ipp[1] === 51 && ipp[2] === 100               ) || // 198.51.100.0/24
		(ipp[0] === 203 && ipp[1] === 0 && ipp[2] === 113                ) || // 203.0.113.0/24
		(ipp[0] >=  224                                                  )    // 224.0.0.0/3
	);
};